<?php

namespace App\Services\Company\Adminland\Software;

use Carbon\Carbon;
use App\Jobs\LogAccountAudit;
use App\Services\BaseService;
use App\Models\Company\Software;

class CreateSoftware extends BaseService
{
    protected array $array;
    protected Software $software;

    /**
     * Get the validation rules that apply to the service.
     *
     * @return array
     */
    public function rules(): array
    {
        return [
            'company_id' => 'required|integer|exists:companies,id',
            'author_id' => 'required|integer|exists:employees,id',
            'name' => 'required|string|max:255',
            'website' => 'nullable|string|max:255',
            'product_key' => 'required|string|max:255',
            'seats' => 'required|integer',
            'licensed_to_name' => 'nullable|string|max:255',
            'licensed_to_email_address' => 'nullable|email|max:255',
            'order_number' => 'nullable|string|max:255',
            'purchase_cost' => 'nullable|integer',
            'currency' => 'nullable|string|max:255',
            'purchase_date' => 'nullable|date_format:Y-m-d',
        ];
    }

    /**
     * Create a software.
     *
     * @param array $data
     * @return Software
     */
    public function execute(array $data): Software
    {
        $this->data = $data;
        $this->validate();
        $this->create();
        $this->log();

        return $this->software;
    }

    private function validate(): void
    {
        $this->validateRules($this->data);

        $this->author($this->data['author_id'])
            ->inCompany($this->data['company_id'])
            ->asAtLeastHR()
            ->canExecuteService();
    }

    private function create(): void
    {
        $this->software = Software::create([
            'company_id' => $this->data['company_id'],
            'name' => $this->data['name'],
            'website' => $this->valueOrNull($this->data, 'website'),
            'product_key' => $this->valueOrNull($this->data, 'product_key'),
            'seats' => $this->data['seats'],
            'licensed_to_name' => $this->valueOrNull($this->data, 'licensed_to_name'),
            'licensed_to_email_address' => $this->valueOrNull($this->data, 'licensed_to_email_address'),
            'order_number' => $this->valueOrNull($this->data, 'order_number'),
            'purchase_cost' => $this->valueOrNull($this->data, 'purchase_cost'),
            'currency' => $this->valueOrNull($this->data, 'currency'),
            'purchase_date' => $this->valueOrNull($this->data, 'purchase_date'),
        ]);
    }

    private function log(): void
    {
        LogAccountAudit::dispatch([
            'company_id' => $this->data['company_id'],
            'action' => 'software_created',
            'author_id' => $this->author->id,
            'author_name' => $this->author->name,
            'audited_at' => Carbon::now(),
            'objects' => json_encode([
                'software_id' => $this->software->id,
                'software_name' => $this->software->name,
            ]),
        ])->onQueue('low');
    }
}
