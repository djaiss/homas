<?php

namespace Tests\Unit\Helpers;

use Tests\TestCase;
use App\Helpers\LogHelper;
use App\Models\Company\Team;
use App\Models\Company\TeamLog;
use App\Models\Company\AuditLog;
use App\Models\Company\EmployeeLog;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class LogHelperTest extends TestCase
{
    use DatabaseTransactions;

    /** @test */
    public function it_returns_the_string_explaining_the_audit_log(): void
    {
        $michael = $this->createAdministrator();

        $auditLog = factory(AuditLog::class)->create([
            'action' => 'employee_invited_to_become_user',
            'objects' => json_encode([
                'author_id' => $michael->user->id,
                'employee_first_name' => $michael->user->first_name,
                'employee_last_name' => $michael->user->last_name,
            ]),
            'company_id' => $michael->company_id,
        ]);

        $this->assertIsString(LogHelper::processAuditLog($auditLog));
    }

    /** @test */
    public function it_returns_the_string_explaining_the_employee_log(): void
    {
        $michael = $this->createAdministrator();

        $auditLog = factory(EmployeeLog::class)->create([
            'action' => 'direct_report_assigned',
            'objects' => json_encode([
                'author_id' => $michael->user->id,
                'direct_report_name' => $michael->user->name,
            ]),
            'employee_id' => $michael->id,
        ]);

        $this->assertIsString(LogHelper::processEmployeeLog($auditLog));
    }

    /** @test */
    public function it_returns_the_string_explaining_the_team_log(): void
    {
        $team = factory(Team::class)->create([]);

        $auditLog = factory(TeamLog::class)->create([
            'action' => 'team_log_team_created',
            'objects' => json_encode([
                'team_name' => $team->id,
            ]),
            'team_id' => $team->id,
        ]);

        $this->assertIsString(LogHelper::processTeamLog($auditLog));
    }
}
