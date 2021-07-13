<?php

namespace Tests\Unit\Services\Company\Adminland\JobOpening;

use Tests\TestCase;
use App\Jobs\LogAccountAudit;
use App\Models\Company\Employee;
use App\Models\Company\Position;
use App\Models\Company\JobOpening;
use Illuminate\Support\Facades\Queue;
use Illuminate\Validation\ValidationException;
use App\Exceptions\NotEnoughPermissionException;
use Illuminate\Foundation\Testing\DatabaseTransactions;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use App\Services\Company\Adminland\JobOpening\CreateJobOpening;

class CreateJobOpeningTest extends TestCase
{
    use DatabaseTransactions;

    /** @test */
    public function it_creates_a_job_opening_as_administrator(): void
    {
        $michael = $this->createAdministrator();
        $position = Position::factory()->create([
            'company_id' => $michael->company_id,
        ]);
        $this->executeService($michael, $michael, $position, $team);
    }

    /** @test */
    public function it_creates_a_job_opening_as_hr(): void
    {
        $michael = $this->createHR();
        $position = Position::factory()->create([
            'company_id' => $michael->company_id,
        ]);
        $this->executeService($michael, $michael, $position, $team);
    }

    /** @test */
    public function normal_user_cant_execute_the_service(): void
    {
        $this->expectException(NotEnoughPermissionException::class);

        $michael = $this->createEmployee();
        $position = Position::factory()->create([
            'company_id' => $michael->company_id,
        ]);
        $this->executeService($michael, $michael, $position, $team);
    }

    /** @test */
    public function it_fails_if_wrong_parameters_are_given(): void
    {
        $request = [
            'title' => 'Assistant to the regional manager',
        ];

        $this->expectException(ValidationException::class);
        (new CreateJobOpening)->execute($request);
    }

    /** @test */
    public function it_fails_if_job_position_is_not_in_the_company(): void
    {
        $michael = $this->createAdministrator();
        $position = Position::factory()->create([]);

        $this->expectException(ModelNotFoundException::class);
        $this->executeService($michael, $michael, $position, $team);
    }

    /** @test */
    public function it_fails_if_team_is_not_in_the_company(): void
    {
        $michael = $this->createAdministrator();
        $position = Position::factory()->create([]);

        $this->expectException(ModelNotFoundException::class);
        $this->executeService($michael, $michael, $position, $team);
    }

    private function executeService(Employee $author, Employee $sponsor, Position $position, Team $team): void
    {
        Queue::fake();

        $request = [
            'company_id' => $author->company_id,
            'author_id' => $author->id,
            'position_id' => $position->id,
            'sponsored_by_employee_id' => $sponsor->id,
            'title' => 'Assistant to the regional manager',
            'description' => 'Awesome job',
            'reference_number' => '123',
        ];

        $jobOpening = (new CreateJobOpening)->execute($request);

        $this->assertDatabaseHas('job_openings', [
            'id' => $jobOpening->id,
            'company_id' => $author->company_id,
            'position_id' => $position->id,
            'title' => 'Assistant to the regional manager',
            'description' => 'Awesome job',
            'reference_number' => '123',
        ]);

        $this->assertInstanceOf(
            JobOpening::class,
            $jobOpening
        );

        Queue::assertPushed(LogAccountAudit::class, function ($job) use ($author, $jobOpening) {
            return $job->auditLog['action'] === 'job_opening_created' &&
                $job->auditLog['author_id'] === $author->id &&
                $job->auditLog['objects'] === json_encode([
                    'job_opening_id' => $jobOpening->id,
                    'job_opening_title' => $jobOpening->title,
                ]);
        });
    }
}
