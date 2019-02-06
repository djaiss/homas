<?php

namespace Tests;

use App\Models\User\User;
use Illuminate\Foundation\Testing\TestCase as BaseTestCase;
use App\Models\Company\Employee;

abstract class TestCase extends BaseTestCase
{
    use CreatesApplication;

    /**
     * Check if the given route is accessible by a user with the given
     * permission.
     *
     * @param string $permissionLevel
     * @param string $route
     * @param int $statusCode
     */
    public function accessibleBy($permissionLevel, $route, $statusCode)
    {
        $employee = factory(Employee::class)->create([
            'permission_level' => $permissionLevel,
        ]);
        $this->be($employee->user);

        $response = $this->get($employee->company->id.$route);
        $response->assertStatus($statusCode);
    }
}
