<?php

namespace Tests\Unit\Services\User;

use Tests\TestCase;
use App\Models\Account\Account;
use App\Services\Account\CreateAccount;
use App\Exceptions\EmailAlreadyUsedException;
use Illuminate\Validation\ValidationException;
use Illuminate\Foundation\Testing\DatabaseTransactions;
use App\Models\User\User;

class CreateAccountTest extends TestCase
{
    use DatabaseTransactions;

    /** @test */
    public function it_creates_an_account()
    {
        $request = [
            'subdomain' => 'dundermifflin',
            'email' => 'dwight@dundermifflin.com',
            'password' => 'password',
        ];

        $account = (new CreateAccount)->execute($request);

        $this->assertDatabaseHas('accounts', [
            'id' => $account->id,
            'subdomain' => 'dundermifflin',
        ]);

        $this->assertDatabaseHas('users', [
            'account_id' => $account->id,
            'email' => 'dwight@dundermifflin.com',
        ]);

        $this->assertInstanceOf(
            Account::class,
            $account
        );
    }

    public function test_it_fails_if_wrong_parameters_are_given()
    {
        $request = [
            'subdomain' => 'dundermifflin',
            'email' => 'dwight@dundermifflin.com',
        ];

        $this->expectException(ValidationException::class);
        $account = (new CreateAccount)->execute($request);
    }
}
