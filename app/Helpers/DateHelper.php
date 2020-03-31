<?php

namespace App\Helpers;

use Carbon\Carbon;
use App\Models\Company\CompanyPTOPolicy;

class DateHelper
{
    /**
     * Returns a date according to the timezone of the user, in a
     * short format like "Oct 29, 1981".
     */
    public static function formatDate(Carbon $date): string
    {
        return $date->format(trans('format.date'));
    }

    /**
     * Returns a date and the time according to the timezone of the user, in a
     * short format like "Oct 29, 1981 19:32".
     */
    public static function formatShortDateWithTime(Carbon $date): string
    {
        return $date->format(trans('format.short_date_year_time'));
    }

    /**
     * Returns the day and the month in a format like "July 29th".
     */
    public static function formatMonthAndDay(Carbon $date): string
    {
        return $date->isoFormat(trans('format.long_month_day'));
    }

    /**
     * Returns the day and the month in a format like "Monday (July 29th)".
     */
    public static function formatDayAndMonthInParenthesis(Carbon $date): string
    {
        return $date->isoFormat(trans('format.day_month_parenthesis'));
    }

    /**
     * Translate the given month to a string using the locale of the app.
     */
    public static function translateMonth(Carbon $date): string
    {
        return $date->format(trans('format.full_month'));
    }

    /**
     * Calculate the next occurence in the future for this date.
     */
    public static function getNextOccurence(Carbon $date): Carbon
    {
        if ($date->isFuture()) {
            return $date;
        }

        $date->addYear();

        while ($date->isPast()) {
            $date = static::getNextOccurence($date);
        }

        return $date;
    }

    /**
     * Get the number of days in a given year.
     */
    public static function getNumberOfDaysInYear(Carbon $date): int
    {
        return $date->isLeapYear() ? 366 : 365;
    }

    /**
     * Determine if the date is in the future, in the present or in the past.
     *
     * @param Carbon $date
     * @return string
     */
    public static function determineDateStatus(Carbon $date): string
    {
        $status = '';
        if ($date->isFuture() == 1) {
            $status = 'future';
        } else {
            if ($date->isCurrentDay() == 1) {
                $status = 'current';
            } else {
                $status = 'past';
            }
        }

        return $status;
    }

    /**
     * Return an array containing a yearly calendar.
     * This array contains a row for each month. The first entry in this array
     * is the current month.
     * This is used to populate the PTO policies in the Adminland page.
     */
    public static function prepareCalendar(CompanyPTOPolicy $ptoPolicy, string $locale = 'en'): array
    {
        $calendarDays = $ptoPolicy->calendars()->select('id', 'is_worked', 'day_of_year')->get();
        $firstDayId = $calendarDays->first()->id;

        $date = Carbon::create($ptoPolicy->year);
        $date->setLocale($locale);

        $calendar = [];
        for ($month = 1; $month <= 12; $month++) {
            $currentMonth = collect([]);

            $currentMonth->push([
                'day' => 0,
                'abbreviation' => $date->format('M'),
            ]);

            $daysInMonth = $date->daysInMonth;
            for ($day = 1; $day <= $daysInMonth; $day++) {
                $currentMonth->push([
                    'id' => $firstDayId,
                    'day_of_year' => $date->dayOfYear,
                    'day_of_week' => $date->dayOfWeek, // 0: sunday / 6: saturday
                    'abbreviation' => substr($date->format('D'), 0, 1),
                    'is_worked' => $calendarDays->find($firstDayId)->is_worked,
                ]);
                $date->addDay();
                $firstDayId++;
            }

            array_push($calendar, $currentMonth);
        }

        return $calendar;
    }
}
