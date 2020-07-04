<?php

namespace App\Services\Company\Employee\Expense;

use Carbon\Carbon;
use App\Jobs\LogAccountAudit;
use App\Services\BaseService;
use App\Jobs\LogEmployeeAudit;
use App\Models\Company\Expense;
use App\Models\Company\Employee;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Log;
use App\Models\Company\ExpenseCategory;

class CreateExpense extends BaseService
{
    private Expense $expense;

    private Employee $employee;

    private array $data;

    private Collection $managers;

    /**
     * Get the validation rules that apply to the service.
     *
     * @return array
     */
    public function rules(): array
    {
        return [
            'company_id' => 'required|integer|exists:companies,id',
            'author_id' => 'required|integer|exists:employees,id',
            'employee_id' => 'required|integer|exists:employees,id',
            'expense_category_id' => 'nullable|integer|exists:expense_categories,id',
            'title' => 'required|string|max:255',
            'amount' => 'required|integer',
            'currency' => 'required|string|max:255',
            'description' => 'nullable|string|max:65535',
            'expensed_at' => 'required|date',
            'is_dummy' => 'nullable|boolean',
        ];
    }

    /**
     * Create an expense.
     *
     * @param array $data
     * @return Expense
     */
    public function execute(array $data): Expense
    {
        $this->data = $data;

        $this->validate();

        $this->managers = $this->employee->managers;

        $this->addExpense();

        $this->nextStep();

        $this->log();

        return $this->expense;
    }

    /**
     * Make preliminary checks.
     */
    private function validate(): void
    {
        $this->validateRules($this->data);
        $this->author($this->data['author_id'])
            ->inCompany($this->data['company_id'])
            ->asAtLeastHR()
            ->canBypassPermissionLevelIfEmployee($this->data['employee_id'])
            ->canExecuteService();

        $this->employee = $this->validateEmployeeBelongsToCompany($this->data);

        if ($this->valueOrNull($this->data, 'expense_category_id')) {
            ExpenseCategory::where('company_id', $this->data['company_id'])
                ->findOrFail($this->data['expense_category_id']);
        }
    }

    /**
     * Actually create the expense.
     */
    private function addExpense(): void
    {
        $this->expense = Expense::create([
            'employee_id' => $this->data['employee_id'],
            'expense_category_id' => $this->valueOrNull($this->data, 'expense_category_id'),
            'title' => $this->data['title'],
            'amount' => $this->data['amount'],
            'currency' => $this->data['currency'],
            'description' => $this->valueOrNull($this->data, 'description'),
            'expensed_at' => $this->data['expensed_at'],
            'status' => $this->managers->count() > 0 ? 'manager_approval' : 'accounting_approval',
            'is_dummy' => $this->valueOrFalse($this->data, 'is_dummy'),
        ]);
    }

    /**
     * Check what the next validation should be for this expense.
     * If the employee has managers, assign the expense to all the managers.
     * If the employee doesn't have a manager, assign the expense to the
     * accounting department.
     */
    private function nextStep(): void
    {
        foreach ($this->managers as $manager) {
            (new AssignExpenseToManager)->execute([
                'company_id' => $this->data['company_id'],
                'author_id' => $this->data['author_id'],
                'employee_id' => $this->data['employee_id'],
                'expense_id' => $this->expense->id,
                'manager_id' => $manager->manager->id,
                'is_dummy' => $this->valueOrFalse($this->data, 'is_dummy'),
            ]);
        }
    }

    /**
     * Add audit logs.
     */
    private function log(): void
    {
        LogAccountAudit::dispatch([
            'company_id' => $this->data['company_id'],
            'action' => 'expense_created',
            'author_id' => $this->author->id,
            'author_name' => $this->author->name,
            'audited_at' => Carbon::now(),
            'objects' => json_encode([
                'employee_id' => $this->employee->id,
                'employee_name' => $this->employee->name,
                'expense_id' => $this->expense->id,
                'expense_title' => $this->expense->title,
                'expense_amount' => $this->expense->amount,
                'expense_currency' => $this->expense->currency,
                'expensed_at' => $this->expense->expensed_at,
            ]),
            'is_dummy' => $this->valueOrFalse($this->data, 'is_dummy'),
        ])->onQueue('low');

        LogEmployeeAudit::dispatch([
            'employee_id' => $this->employee->id,
            'action' => 'expense_created',
            'author_id' => $this->author->id,
            'author_name' => $this->author->name,
            'audited_at' => Carbon::now(),
            'objects' => json_encode([
                'expense_id' => $this->expense->id,
                'expense_title' => $this->expense->title,
                'expense_amount' => $this->expense->amount,
                'expense_currency' => $this->expense->currency,
                'expensed_at' => $this->expense->expensed_at,
            ]),
            'is_dummy' => $this->valueOrFalse($this->data, 'is_dummy'),
        ])->onQueue('low');
    }
}
