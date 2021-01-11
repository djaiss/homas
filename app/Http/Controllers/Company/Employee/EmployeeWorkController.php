<?php

namespace App\Http\Controllers\Company\Employee;

use Inertia\Inertia;
use App\Models\User\Pronoun;
use Illuminate\Http\Request;
use App\Helpers\InstanceHelper;
use App\Models\Company\Employee;
use App\Helpers\NotificationHelper;
use App\Http\Controllers\Controller;
use App\Http\Collections\PronounCollection;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use App\Http\ViewHelpers\Employee\EmployeeShowViewHelper;

class EmployeeWorkController extends Controller
{
    /**
     * Display the detail of an employee’s work panel.
     *
     * @param Request $request
     * @param int $companyId
     * @param int $employeeId
     * @return mixed
     */
    public function show(Request $request, int $companyId, int $employeeId)
    {
        $company = InstanceHelper::getLoggedCompany();
        $loggedEmployee = InstanceHelper::getLoggedEmployee();

        try {
            $employee = Employee::where('company_id', $companyId)
                ->where('id', $employeeId)
                ->with('teams')
                ->with('company')
                ->with('pronoun')
                ->with('user')
                ->with('status')
                ->with('oneOnOneEntriesAsEmployee')
                ->firstOrFail();
        } catch (ModelNotFoundException $e) {
            return redirect('home');
        }

        // information about what the logged employee can do
        $permissions = EmployeeShowViewHelper::permissions($loggedEmployee, $employee);

        // worklogs
        $worklogsCollection = EmployeeShowViewHelper::worklogs($employee);

        // work from home
        $workFromHomeStats = EmployeeShowViewHelper::workFromHomeStats($employee);

        // all the teams the employee belongs to
        $employeeTeams = EmployeeShowViewHelper::teams($employee->teams, $company);

        // all recent ships of this employee
        $ships = EmployeeShowViewHelper::recentShips($employee);

        // information about the employee that the logged employee consults, that depends on what the logged Employee has the right to see
        $employee = EmployeeShowViewHelper::informationAboutEmployee($employee, $permissions);

        return Inertia::render('Employee/Work/Show', [
            'menu' => 'work',
            'employee' => $employee,
            'permissions' => $permissions,
            'notifications' => NotificationHelper::getNotifications(InstanceHelper::getLoggedEmployee()),
            'teams' => $employeeTeams,
            'pronouns' => PronounCollection::prepare(Pronoun::all()),
            'worklogs' => $worklogsCollection,
            'workFromHomes' => $workFromHomeStats,
            'ships' => $ships,
        ]);
    }
}
