<?php

namespace Tests\Unit\Controllers\Company\Employee;

use Tests\TestCase;
use App\Models\Company\Employee;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class LogsControllerTest extends TestCase
{
    use DatabaseTransactions;

    /** @test */
    public function it_lets_you_see_employees_logs_with_the_right_permissions()
    {
        $employee = factory(Employee::class)->create([]);
        $route = '/employees/' . $employee->id . '/logs';

        $this->accessibleBy($employee, config('homas.authorizations.administrator'), $route, 200);
        $this->accessibleBy($employee, config('homas.authorizations.hr'), $route, 200);
        $this->accessibleBy($employee, config('homas.authorizations.user'), $route, 200);
    }
}
