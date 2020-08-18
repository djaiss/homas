<?php

namespace App\Http\ViewHelpers\Dashboard;

use App\Helpers\DateHelper;
use App\Helpers\MoneyHelper;
use App\Helpers\QuestionHelper;
use App\Models\Company\Company;
use App\Models\Company\Expense;
use App\Models\Company\Employee;
use Illuminate\Support\Collection;
use Money\Currencies\ISOCurrencies;
use App\Models\Company\RateYourManagerAnswer;

class DashboardMeViewHelper
{
    /**
     * Array containing all the information about the current active question.
     *
     * @param Employee $employee
     * @return array|null
     */
    public static function question(Employee $employee): ?array
    {
        // get active question
        $question = $employee->company->questions()->with('answers')->with('answers.employee')->active()->first();

        // if no active question
        if (! $question) {
            return null;
        }

        $answerByEmployee = QuestionHelper::getAnswer($question, $employee);

        // collection of all employee answers
        $allAnswers = $question->answers;
        $answersCollection = collect([]);
        foreach ($allAnswers->take(3) as $answer) {
            $answersCollection->push([
                'id' => $answer->id,
                'body' => $answer->body,
                'employee' => [
                    'id' => $answer->employee->id,
                    'name' => $answer->employee->name,
                    'avatar' => $answer->employee->avatar,
                ],
            ]);
        }

        $response = [
            'id' => $question->id,
            'title' => $question->title,
            'number_of_answers' => $allAnswers->count(),
            'answers' => $answersCollection,
            'employee_has_answered' => $answerByEmployee ? true : false,
            'answer_by_employee' => $answerByEmployee ? [
                'body' => $answerByEmployee->body,
            ] : null,
            'url' => route('company.questions.show', [
                'company' => $employee->company,
                'question' => $question,
            ]),
        ];

        return $response;
    }

    /**
     * All the tasks of this employee.
     *
     * @param Employee $employee
     * @return Collection|null
     */
    public static function tasks(Employee $employee): ?Collection
    {
        $tasks = $employee->tasks()->inProgress()->get();

        $tasksCollection = collect([]);
        foreach ($tasks as $task) {
            $tasksCollection->push([
                'id' => $task->id,
                'title' => $task->title,
            ]);
        }

        return $tasksCollection;
    }

    /**
     * All the expense categories available in this company.
     *
     * @param Company $company
     * @return Collection|null
     */
    public static function categories(Company $company): ?Collection
    {
        $categories = $company->expenseCategories;

        $categoriesCollection = collect([]);
        foreach ($categories as $category) {
            $categoriesCollection->push([
                'id' => $category->id,
                'name' => $category->name,
            ]);
        }

        return $categoriesCollection;
    }

    /**
     * Get all the currencies used in the instance.
     *
     * @return Collection|null
     */
    public static function currencies(): ?Collection
    {
        $currencyCollection = collect([]);
        $currencies = new ISOCurrencies();
        foreach ($currencies as $currency) {
            $currencyCollection->push([
                'id' =>$currency->getCode(),
                'code' => $currency->getCode(),
            ]);
        }
        return $currencyCollection;
    }

    /**
     * Get all the in progress expenses for this employee.
     *
     * @var Employee $employee
     * @return Collection|null
     */
    public static function expenses(Employee $employee): ?Collection
    {
        $expenses = $employee->expenses()
            ->where('expenses.status', '!=', Expense::ACCEPTED)
            ->where('expenses.status', '!=', Expense::CREATED)
            ->where('expenses.status', '!=', Expense::REJECTED_BY_MANAGER)
            ->where('expenses.status', '!=', Expense::REJECTED_BY_ACCOUNTING)
            ->with('category')
            ->latest()
            ->get();

        $expensesCollection = collect([]);
        foreach ($expenses as $expense) {
            $expensesCollection->push([
                'id' => $expense->id,
                'title' => $expense->title,
                'amount' => MoneyHelper::format($expense->amount, $expense->currency),
                'status' => $expense->status,
                'category' => ($expense->category) ? $expense->category->name : null,
                'expensed_at' => DateHelper::formatDate($expense->expensed_at),
                'converted_amount' => $expense->converted_amount ?
                    MoneyHelper::format($expense->converted_amount, $expense->converted_to_currency) :
                    null,
                'url' => route('employee.expenses.show', [
                    'company' => $employee->company,
                    'employee' => $employee,
                    'expense' => $expense,
                ]),
            ]);
        }
        return $expensesCollection;
    }

    /**
     * Get all the Rate Your Manager survey answers that need to be answers, if
     * they exist.
     *
     * @var Employee $employee
     * @return Collection|null
     */
    public static function rateYourManagerAnswers(Employee $employee): ?Collection
    {
        // is there currently an active RateYourManager survey?
        $answers = $employee->rateYourManagerAnswers()
            ->where('active', true)
            ->whereNull('rating')
            ->with('entry')
            ->with('entry.manager')
            ->get();

        $answersCollection = collect([]);
        foreach ($answers as $answer) {
            $answersCollection->push([
                'id' => $answer->id,
                'manager_name' => $answer->entry->manager->name,
                'deadline' => DateHelper::hoursOrDaysLeft($answer->entry->valid_until_at),
            ]);
        }
        return $answersCollection;
    }

    /**
     * Get the latest Rate your manager surveys about this manager.
     *
     * @var Employee $employee
     * @return Collection|null
     */
    public static function latestRateYourManagerSurveys(Employee $employee): ?Collection
    {
        $surveys = $employee->rateYourManagerSurveys()
            ->with('answers')
            ->latest()
            ->get()
            ->take(2);

        if ($surveys->count() == 0) {
            return null;
        }

        $surveysCollection = collect([]);

        // if the first survey is not active, that means we need to indicate to
        // the manager the date of the next survey
        $survey = $surveys->first();
        if (! $survey->active) {
            $surveysCollection->push([
                'id' => null,
                'month' => Carbon::now()->format('M Y'),
                'deadline' => DateHelper::hoursOrDaysLeft(Carbon::now()->endOfMonth()),
            ]);
        }

        foreach ($surveys as $survey) {
            $totalNumberOfPotentialResponders = $survey->answers->count();
            $numberOfAnswers = 0;

            // counting results about answers, if available
            $results = [];
            if ($survey->answers) {
                $bad = $survey->answers->filter(function ($answer) {
                    return $answer->rating == RateYourManagerAnswer::BAD;
                });
                $average = $survey->answers->filter(function ($answer) {
                    return $answer->rating == RateYourManagerAnswer::AVERAGE;
                });
                $good = $survey->answers->filter(function ($answer) {
                    return $answer->rating == RateYourManagerAnswer::GOOD;
                });
                $results = [
                    'bad' => $bad->count(),
                    'average' => $average->count(),
                    'good' => $good->count(),
                ];

                $numberOfAnswers = $bad->count() + $average->count() + $good->count();
            }

            $surveysCollection->push([
                'id' => $survey->id,
                'active' => $survey->active,
                'month' => $survey->created_at->format('M Y'),
                'deadline' => DateHelper::hoursOrDaysLeft($survey->valid_until_at),
                'results' => $results,
                'employees' => $totalNumberOfPotentialResponders,
                'response_rate' => $numberOfAnswers != 0 ? round($numberOfAnswers * 100 / $totalNumberOfPotentialResponders) : 0,
            ]);
        }

        return $surveysCollection;
    }
}
