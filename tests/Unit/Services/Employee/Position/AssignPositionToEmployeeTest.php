<?php

namespace Tests\Unit\Services\Employee\Position;

use Tests\TestCase;
use App\Models\Company\Employee;
use App\Exceptions\SameIdsException;
use Illuminate\Validation\ValidationException;
use App\Services\Adminland\Employee\AssignManager;
use Illuminate\Foundation\Testing\DatabaseTransactions;
use App\Models\Company\Position;
use App\Services\Employee\Position\AssignPositionToEmployee;

class AssignPositionToEmployeeTest extends TestCase
{
    use DatabaseTransactions;

    /** @test */
    public function it_assigns_a_position()
    {
        $employee = factory(Employee::class)->create([]);
        $position = factory(Position::class)->create([
            'company_id' => $employee->company_id,
        ]);

        $request = [
            'company_id' => $employee->company_id,
            'author_id' => $employee->user->id,
            'employee_id' => $employee->id,
            'position_id' => $position->id,
        ];

        $position = (new AssignPositionToEmployee)->execute($request);

        $this->assertDatabaseHas('employees', [
            'company_id' => $employee->company_id,
            'id' => $employee->id,
            'position_id' => $position->id,
        ]);

        $this->assertInstanceOf(
            Position::class,
            $position
        );
    }

    /** @test */
    public function it_logs_an_action()
    {
        $employee = factory(Employee::class)->create([]);
        $position = factory(Position::class)->create([
            'company_id' => $employee->company_id,
        ]);

        $request = [
            'company_id' => $employee->company_id,
            'author_id' => $employee->user->id,
            'employee_id' => $employee->id,
            'position_id' => $position->id,
        ];

        (new AssignPositionToEmployee)->execute($request);

        $this->assertdatabasehas('employee_logs', [
            'company_id' => $employee->company_id,
            'employee_id' => $employee->id,
            'action' => 'position_assigned',
        ]);
    }

    /** @test */
    public function it_fails_if_wrong_parameters_are_given()
    {
        $request = [
            'first_name' => 'Dwight',
        ];

        $this->expectException(ValidationException::class);
        (new AssignPositionToEmployee)->execute($request);
    }
}
