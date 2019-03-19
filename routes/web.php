<?php

use Illuminate\Support\Facades\Route;

Route::get('signup', 'Auth\\RegisterController@index');
Route::post('signup', 'Auth\\RegisterController@store');
Route::get('login', 'Auth\\LoginController@index')->name('login');
Route::post('login', 'Auth\\LoginController@store');

Route::get('invite/employee/{link}', 'Auth\\UserInvitationController@check');

Route::middleware(['auth'])->group(function () {
    Route::get('logout', 'Auth\\LoginController@logout');

    Route::get('home', 'HomeController@index')->name('home');
    Route::post('search/employees', 'HeaderSearchController@employees');
    Route::post('search/teams', 'HeaderSearchController@teams');

    Route::resource('company', 'Company\\CompanyController')->only(['create', 'store']);

    // only available if user is in the right account
    Route::middleware(['company'])->prefix('{company}')->group(function () {
        Route::get('dashboard', 'Company\\CompanyController@index');

        Route::prefix('employees')->group(function () {
            Route::get('{employee}', 'Company\\Employee\\EmployeeController@show');
            Route::post('{employee}/assignManager', 'Company\\Employee\\EmployeeController@assignManager');
            Route::post('{employee}/assignDirectReport', 'Company\\Employee\\EmployeeController@assignDirectReport');
            Route::post('{employee}/search/hierarchy', 'Company\\Employee\\EmployeeSearchController@hierarchy');
        });

        Route::prefix('teams')->group(function () {
            Route::get('{team}', 'Company\\TeamController@show');
        });

        // only available to administrator role
        Route::middleware(['administrator'])->group(function () {
            Route::get('account/audit', 'Company\\Account\\AuditController@index');
            Route::get('account/dummy', 'Company\\Account\\DummyController@index');
        });

        // only available to hr role
        Route::middleware(['hr'])->group(function () {
            // adminland
            Route::get('account', 'Company\\Account\\AccountController@index');

            // employee management
            Route::resource('account/employees', 'Company\\Account\\EmployeeController');
            Route::get('account/employees/{employee}/destroy', 'Company\\Account\\EmployeeController@destroy');
            Route::get('account/employees/{employee}/permissions', 'Company\\Account\\PermissionController@index');
            Route::post('account/employees/{employee}/permissions', 'Company\\Account\\PermissionController@store');

            // team management
            Route::resource('account/teams', 'Company\\Account\\TeamController');
            Route::get('account/teams/{team}/destroy', 'Company\\Account\\TeamController@destroy');
        });
    });
});
