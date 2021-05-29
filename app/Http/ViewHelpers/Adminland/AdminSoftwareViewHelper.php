<?php

namespace App\Http\ViewHelpers\Adminland;

use App\Helpers\DateHelper;
use App\Helpers\ImageHelper;
use App\Models\Company\Company;
use App\Models\Company\Software;
use Illuminate\Support\Collection;

class AdminSoftwareViewHelper
{
    /**
     * Get all the softwares in the company.
     *
     * @param mixed $softwares
     * @param Company $company
     * @return array
     */
    public static function index($softwares, Company $company): array
    {
        $softwareCollection = collect([]);
        foreach ($softwares as $software) {
            $employeeCount = $software->employees()->count();

            $softwareCollection->push([
                'id' => $software->id,
                'name' => $software->name,
                'seats' => $software->seats,
                'remaining_seats' => $software->seats - $employeeCount,
                'url' => route('software.show', [
                    'company' => $company,
                    'software' => $software,
                ]),
            ]);
        }

        return [
            'softwares' => $softwareCollection,
            'url_new' => route('software.create', [
                'company' => $company,
            ]),
        ];
    }

    /**
     * Shows the details of a given software.
     *
     * @param Software $software
     * @return array
     */
    public static function show(Software $software): array
    {
        $numberOfSeatsUsed = $software->employees()->count();

        return [
            'id' => $software->id,
            'name' => $software->name,
            'website' => $software->website,
            'product_key' => $software->product_key,
            'seats' => $software->seats,
            'used_seats' => $numberOfSeatsUsed,
            'remaining_seats' => $software->seats - $numberOfSeatsUsed,
            'licensed_to_name' => $software->licensed_to_name,
            'licensed_to_email_address' => $software->licensed_to_email_address,
            'order_number' => $software->order_number,
            'purchase_amount' => $software->purchase_amount,
            'currency' => $software->currency,
            'converted_purchase_amount' => $software->converted_purchase_amount,
            'converted_to_currency' => $software->converted_to_currency,
            'purchased_at' => $software->purchased_at ? DateHelper::formatDate($software->purchased_at) : null,
            'converted_at' => $software->converted_at ? DateHelper::formatDate($software->converted_at) : null,
            'exchange_rate' => $software->exchange_rate,
        ];
    }

    /**
     * Edit a given software.
     *
     * @param Software $software
     * @return array
     */
    public static function edit(Software $software): array
    {
        return [
      'id' => $software->id,
      'name' => $software->name,
      'website' => $software->website,
      'product_key' => $software->product_key,
      'seats' => $software->seats,
      'used_seats' => $numberOfSeatsUsed,
      'remaining_seats' => $software->seats - $numberOfSeatsUsed,
      'licensed_to_name' => $software->licensed_to_name,
      'licensed_to_email_address' => $software->licensed_to_email_address,
      'order_number' => $software->order_number,
      'purchase_amount' => $software->purchase_amount,
      'currency' => $software->currency,
      'converted_purchase_amount' => $software->converted_purchase_amount,
      'converted_to_currency' => $software->converted_to_currency,
      'purchased_at' => $software->purchased_at ? DateHelper::formatDate($software->purchased_at) : null,
      'converted_at' => $software->converted_at ? DateHelper::formatDate($software->converted_at) : null,
      'exchange_rate' => $software->exchange_rate,
    ];
    }

    /**
     * Get the employees who are assigned with this software.
     *
     * @param mixed $employees
     * @param Company $company
     * @return Collection
     */
    public static function seats($employees, Company $company): Collection
    {
        $employeesCollection = collect();
        foreach ($employees as $employee) {
            $employeesCollection->push([
                'id' => $employee->id,
                'name' => $employee->name,
                'avatar' => ImageHelper::getAvatar($employee, 21),
                'product_key' => $employee->pivot->product_key,
                'url' => route('employees.show', [
                    'company' => $company,
                    'employee' => $employee,
                ]),
            ]);
        }

        return $employeesCollection;
    }

    /**
     * Get the list of potential employees who can be assigned the software.
     *
     * @param Software $software
     * @param Company $company
     * @param string $criteria
     * @return Collection
     */
    public static function getPotentialEmployees(Software $software, Company $company, string $criteria): Collection
    {
        // get list of employees who have the software
        $employees = $software->employees()
            ->select('id')
            ->pluck('id')
            ->toArray();

        $potentialEmployees = $company->employees()
            ->select('id', 'first_name', 'last_name', 'avatar_file_id')
            ->notLocked()
            ->whereNotIn('id', $employees)
            ->where(function ($query) use ($criteria) {
                $query->where('first_name', 'LIKE', '%' . $criteria . '%')
                    ->orWhere('last_name', 'LIKE', '%' . $criteria . '%')
                    ->orWhere('email', 'LIKE', '%' . $criteria . '%');
            })
            ->orderBy('last_name', 'asc')
            ->take(10)
            ->get();

        $employeesCollection = collect([]);
        foreach ($potentialEmployees as $employee) {
            $employeesCollection->push([
                'id' => $employee->id,
                'name' => $employee->name,
            ]);
        }

        return $employeesCollection;
    }
}
