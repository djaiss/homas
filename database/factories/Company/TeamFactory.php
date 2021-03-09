<?php

namespace Database\Factories\Company;

use App\Models\Company\Team;
use App\Models\Company\Company;
use App\Models\Company\Employee;
use Illuminate\Database\Eloquent\Factories\Factory;

class TeamFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Team::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $company = Company::factory()->create();

        return [
            'company_id' => $company->id,
            'name' => $this->faker->name,
            'team_leader_id' => Employee::factory()->create([
                'company_id' => $company->id,
            ])->id,
        ];
    }
}
