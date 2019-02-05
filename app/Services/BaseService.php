<?php

namespace App\Services;

use Carbon\Carbon;
use App\Models\User\User;
use App\Models\Company\Employee;
use Illuminate\Support\Facades\Validator;
use App\Exceptions\NotEnoughPermissionException;

abstract class BaseService
{
    /**
     * Get the validation rules that apply to the service.
     *
     * @return array
     */
    public function rules()
    {
        return [];
    }

    /**
     * Validate an array against a set of rules.
     *
     * @param array $data
     * @return bool
     */
    public function validate(array $data) : bool
    {
        $validator = Validator::make($data, $this->rules())
            ->validate();

        return true;
    }

    /**
     * Checks if the user has the permission to do the action.
     *
     * @param int $userId
     * @param int $companyId
     * @param string $requiredPermissionLevel
     * @return User
     */
    public function validatePermissions(int $userId, int $companyId, string $requiredPermissionLevel) : User
    {
        $employee = Employee::where('user_id', $userId)
            ->where('company_id', $companyId)
            ->firstOrFail();

        if (config('homas.authorizations.'.$requiredPermissionLevel) < $employee->permission_level) {
            throw new NotEnoughPermissionException;
        }

        return $employee->user;
    }

    /**
     * Checks if the value is empty or null.
     *
     * @param mixed $data
     * @param mixed $index
     * @return mixed
     */
    public function nullOrValue($data, $index)
    {
        if (empty($data[$index])) {
            return;
        }

        return $data[$index] == '' ? null : $data[$index];
    }

    /**
     * Checks if the value is empty or null and returns a date from a string.
     *
     * @param mixed $data
     * @param mixed $index
     * @return mixed
     */
    public function nullOrDate($data, $index)
    {
        if (empty($data[$index])) {
            return;
        }

        return $data[$index] == '' ? null : Carbon::parse($data[$index]);
    }

    /**
     * Returns the value if it's defined, or false otherwise.
     *
     * @param mixed $data
     * @param mixed $index
     * @return mixed
     */
    public function valueOrFalse($data, $index)
    {
        if (empty($data[$index])) {
            return false;
        }

        return $data[$index];
    }
}
