<?php

namespace App\Http\Middleware;

use Closure;
use App\Models\Company\Company;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cache;

class CheckCompany
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        $cachedCompanyObject = 'cachedCompanyObject_'.Auth::user()->id;
        $cachedEmployeeObject = 'cachedEmployeeObject_'.Auth::user()->id;

        $company = Cache::get($cachedCompanyObject);
        $employee = Cache::get($cachedEmployeeObject);

        $requestedCompany = $request->route()->parameter('company');

        // if there is no company in caching
        if (is_null($company)) {
            $company = Company::findOrFail($requestedCompany);
            Cache::put($cachedCompanyObject, $company, now()->addMinutes(60));
        }

        // if the current company (in cache) doesn't match the company in the
        // route, abort
        if ($requestedCompany != $company->id) {
            abort(401);
        }

        // was there a cached employee?
        if (is_null($employee)) {
            $employee = Auth::user()->getEmployeeObjectForCompany($company);
        }

        // if the employee for this company does not exist or if the employee
        // does not belong to this company, abort
        if (is_null($employee) || $employee->company_id != $company->id) {
            abort(401);
        }

        // put the employee in cache
        Cache::put($cachedEmployeeObject, $employee, now()->addMinutes(60));

        if ($employee) {
            return $next($request);
        }

        abort(401);
    }
}
