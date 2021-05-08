<?php

namespace App\Services\Company\Adminland\Software;

use Carbon\Carbon;
use App\Jobs\LogAccountAudit;
use App\Services\BaseService;
use App\Models\Company\Software;

class UpdateSoftware extends BaseService
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
            'software_id' => 'required|integer|exists:softwares,id',
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
     * Update a software.
     *
     * @param array $data
     * @return Software
     */
    public function execute(array $data): Software
    {
        $this->data = $data;
        $this->validate();
        $this->update();
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

        $this->software = Software::where('company_id', $this->data['company_id'])
            ->findOrFail($this->data['software_id']);
    }

    private function update(): void
    {
        $this->software->name = $this->data['name'];
        $this->software->website = $this->valueOrNull($this->data, 'website');
        $this->software->product_key = $this->valueOrNull($this->data, 'product_key');
        $this->software->seats = $this->data['seats'];
        $this->software->licensed_to_name = $this->valueOrNull($this->data, 'licensed_to_name');
        $this->software->licensed_to_email_address = $this->valueOrNull($this->data, 'licensed_to_email_address');
        $this->software->order_number = $this->valueOrNull($this->data, 'order_number');
        $this->software->purchase_cost = $this->valueOrNull($this->data, 'purchase_cost');
        $this->software->currency = $this->valueOrNull($this->data, 'currency');
        $this->software->purchase_date = $this->valueOrNull($this->data, 'purchase_date');
        $this->software->save();
    }

    private function log(): void
    {
        LogAccountAudit::dispatch([
            'company_id' => $this->data['company_id'],
            'action' => 'software_updated',
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
