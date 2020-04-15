<?php

namespace Tests\Unit\ViewHelpers\Company\Company;

use Tests\ApiTestCase;
use App\Models\Company\Answer;
use App\Models\Company\Question;
use GrahamCampbell\TestBenchCore\HelperTrait;
use Illuminate\Foundation\Testing\DatabaseTransactions;
use App\Http\ViewHelpers\Company\Company\CompanyQuestionViewHelper;

class CompanyQuestionViewHelperTest extends ApiTestCase
{
    use DatabaseTransactions,
        HelperTrait;

    /** @test */
    public function it_gets_a_null_if_there_are_no_questions_in_the_company(): void
    {
        $michael = $this->createAdministrator();

        $this->assertNull(
            CompanyQuestionViewHelper::questions($michael->company)
        );
    }

    /** @test */
    public function it_gets_the_information_about_questions_in_the_company(): void
    {
        $michael = $this->createAdministrator();
        $question = factory(Question::class)->create([
            'company_id' => $michael->company_id,
            'title' => 'Do you like Dwight',
        ]);

        $response = CompanyQuestionViewHelper::questions($michael->company);

        $this->assertArraySubset(
            [
                'title' => 'Do you like Dwight',
                'number_of_answers' => 0,
                'url' => env('APP_URL').'/'.$michael->company_id.'/company/questions/'.$question->id,
            ],
            $response->toArray()[0]
        );

        $this->assertArrayHasKey('id', $response->toArray()[0]);
        $this->assertArrayHasKey('title', $response->toArray()[0]);
        $this->assertArrayHasKey('number_of_answers', $response->toArray()[0]);
        $this->assertArrayHasKey('url', $response->toArray()[0]);
    }

    /** @test */
    public function it_gets_the_information_about_a_specific_question(): void
    {
        $michael = $this->createAdministrator();
        $question = factory(Question::class)->create([
            'company_id' => $michael->company_id,
            'title' => 'Do you like Dwight',
        ]);

        factory(Answer::class, 3)->create([
            'question_id' => $question->id,
        ]);

        $answers = $question->answers()->orderBy('created_at', 'desc')->paginate(10);
        $response = CompanyQuestionViewHelper::question($question, $answers, $michael);

        $this->assertArraySubset(
            [
                'id' => $question->id,
                'title' => $question->title,
                'number_of_answers' => $answers->count(),
                'url' => env('APP_URL').'/'.$michael->company_id.'/company/questions/'.$question->id,
            ],
            $response
        );

        $this->assertArrayHasKey('id', $response);
        $this->assertArrayHasKey('title', $response);
        $this->assertArrayHasKey('number_of_answers', $response);
        $this->assertArrayHasKey('answers', $response);
        $this->assertArrayHasKey('employee_has_answered', $response);
        $this->assertArrayHasKey('answer_by_employee', $response);
        $this->assertArrayHasKey('url', $response);
        $this->assertArrayHasKey('date', $response);
    }
}
