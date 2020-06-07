<?php

namespace App\Jobs;

use Illuminate\Bus\Queueable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use App\Services\Company\Team\Ship\AttachEmployeeToShip as ShipAttachEmployeeToShip;

class AttachEmployeeToShip implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    /**
     * @var array
     */
    public array $data;

    /**
     * Create a new job instance.
     */
    public function __construct(array $data)
    {
        $this->data = $data;
    }

    /**
     * Execute the job.
     */
    public function handle()
    {
        $isDummy = true;
        if (empty($this->data['is_dummy'])) {
            $isDummy = false;
        }

        (new ShipAttachEmployeeToShip)->execute([
            'employee_id' => $this->data['employee_id'],
            'author_id' => $this->data['author_id'],
            'employee_id' => $this->data['employee_id'],
            'ship_id' => $this->data['ship_id'],
            'is_dummy' => $isDummy,
        ]);
    }
}
