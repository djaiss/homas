<?php

namespace Tests\Unit\Helpers;

use Carbon\Carbon;
use Tests\TestCase;
use App\Helpers\DateHelper;
use App\Helpers\HolidayHelper;
use App\Models\Company\Employee;
use App\Models\Company\CompanyCalendar;
use App\Models\Company\CompanyPTOPolicy;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class HolidayHelperTest extends TestCase
{
    use DatabaseTransactions;

    /** @test */
    public function it_returns_the_number_of_holidays_earned_each_month() : void
    {
        $michael = factory(Employee::class)->create([
            'amount_of_allowed_holidays' => 30,
        ]);

        $this->assertEquals(
            2.5,
            HolidayHelper::getHolidaysEarnedEachMonth($michael)
        );
    }

    /** @test */
    public function it_returns_the_number_of_days_left_to_earn_this_the_end_of_the_year() : void
    {
        Carbon::setTestNow(Carbon::create(2018, 1, 1));

        $policy = factory(CompanyPTOPolicy::class)->create([
            'year' => 2018,
        ]);
        $michael = factory(Employee::class)->create([
            'amount_of_allowed_holidays' => 30,
        ]);

        $date = Carbon::create($policy->year);
        for ($i = 1; $i <= DateHelper::daysInYear($date); $i++) {
            factory(CompanyCalendar::class)->create([
                'company_pto_policy_id' => $policy->id,
                'day' => $date->format('Y-m-d'),
            ]);
            $date->addDay();
        }

        Carbon::setTestNow(Carbon::create(2018, 10, 1));
        HolidayHelper::getNumberOfDaysLeftToEarn($policy, $michael);
    }
}
