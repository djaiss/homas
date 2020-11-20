<?php

namespace App\Http\Middleware;

use Closure;
use Sentry\State\Scope;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

class SentryContext
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  \Closure                 $next
     *
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        if (app()->bound('sentry') && config('app.sentry.enable')) {
            \Sentry\configureScope(function (Scope $scope): void {
                // Add user context
                $user = Auth::user();
                if ($user !== null) {
                    $scope->setUser([
                        'id' => $user->id,
                        'email' => $user->email,
                        'username' => $user->name,
                    ]);
                } else {
                    $scope->setUser([
                        'id' => null,
                    ]);
                }
                $scope->setTag('page.route.name', Route::currentRouteName());
                $scope->setTag('page.route.action', Route::currentRouteAction());
            });
        }

        return $next($request);
    }
}
