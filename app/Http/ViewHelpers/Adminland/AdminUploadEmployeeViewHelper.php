<?php

namespace App\Http\ViewHelpers\Adminland;

use App\Helpers\DateHelper;
use App\Models\Company\Company;
use App\Models\Company\ImportJob;
use Illuminate\Support\Collection;
use App\Models\Company\ImportJobReport;

class AdminUploadEmployeeViewHelper
{
    /**
     * Get all the CSV imports in the account.
     *
     * @param Company $company
     * @return Collection|null
     */
    public static function index(Company $company): ?Collection
    {
        $jobs = $company->importJobs()->orderBy('id', 'desc')->get();

        $importJobsCollection = collect([]);
        foreach ($jobs as $importJob) {
            $count = ImportJobReport::where('import_job_id', $importJob->id)->count();

            $importJobsCollection->push([
                'id' => $importJob->id,
                'author' => [
                    'name' => is_null($importJob->author_id) ? $importJob->author_name : $importJob->author->name,
                    'url' => is_null($importJob->author_id) ? null : route('employees.show', [
                        'company' => $company,
                        'employee' => $importJob->author,
                    ]),
                ],
                'status' => trans('account.import_employees_status_'.$importJob->status),
                'number_of_entries' => $count,
                'import_started_at' => $importJob->import_started_at ? DateHelper::formatShortDateWithTime($importJob->import_started_at) : null,
                'import_ended_at' => $importJob->import_ended_at ? DateHelper::formatShortDateWithTime($importJob->import_ended_at) : null,
                'url' => route('account.employees.upload.archive.show', [
                    'company' => $company,
                    'archive' => $importJob,
                ]),
            ]);
        }

        return $importJobsCollection;
    }

    /**
     * Get all the details about a specific import job.
     *
     * @param ImportJob $job
     * @return array|null
     */
    public static function show(ImportJob $importJob): ?array
    {
        $reports = $importJob->reports;
        $importJobReportsCollection = collect([]);
        foreach ($reports as $importJobReport) {
            $importJobReportsCollection->push([
                'id' => $importJobReport->id,
                'employee_first_name' => $importJobReport->employee_first_name,
                'employee_last_name' => $importJobReport->employee_last_name,
                'employee_email' => $importJobReport->employee_email,
                'skipped_during_upload' => $importJobReport->skipped_during_upload,
                'skipped_during_upload_reason' => $importJobReport->skipped_during_upload_reason,
            ]);
        }

        return [
            'id' => $importJob->id,
            'author' => [
                'name' => is_null($importJob->author_id) ? $importJob->author_name : $importJob->author->name,
                'url' => is_null($importJob->author_id) ? null : route('employees.show', [
                    'company' => $importJob->company_id,
                    'employee' => $importJob->author,
                ]),
            ],
            'status' => trans('account.import_employees_status_'.$importJob->status),
            'number_of_entries' => $importJobReportsCollection->count(),
            'import_started_at' => $importJob->import_started_at ? DateHelper::formatShortDateWithTime($importJob->import_started_at) : null,
            'import_ended_at' => $importJob->import_ended_at ? DateHelper::formatShortDateWithTime($importJob->import_ended_at) : null,
            'entries' => $importJobReportsCollection,
        ];
    }
}
