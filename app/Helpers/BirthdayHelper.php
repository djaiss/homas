<?php

namespace App\Helpers;

use Carbon\Carbon;

class BirthdayHelper
{
    /**
     * Indicates whether the given date is a birthday in the next X days.
     * @param Carbon $startDate
     * @param Carbon $birthdate
     * @param int $numberOfDays
     * @return bool
     */
    public static function isBirthdayInXDays(Carbon $startDate, Carbon $birthdate, int $numberOfDays): bool
    {
        $future = $startDate->addDays($numberOfDays);
        $birthdate->year = $startDate->year;

        if ($birthdate->isPast()) {
            return false;
        }

        return $birthdate->lessThanOrEqualTo($future) && $future->greaterThanOrEqualTo($startDate);
    }

    /**
     * Check if the birthdate will happen in the given range.
     *
     * @param Carbon $startDate
     * @param integer $numberOfDaysBefore
     * @param integer $numberOfDaysAfter
     * @return boolean
     */
    public static function isBirthdayInRange(Carbon $birthdate, int $numberOfDaysBefore, int $numberOfDaysAfter): bool
    {
        $future = $startDate->subDays($);
        $birthdate->year = $startDate->year;

        if ($birthdate->isPast()) {
            return false;
        }

        return $birthdate->lessThanOrEqualTo($future) && $future->greaterThanOrEqualTo($startDate);
    }
}
