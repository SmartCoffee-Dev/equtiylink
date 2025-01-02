<?php

namespace Tests\Feature\Invoices;

use App\Modules\Invoices\Application\CurrencyActions;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class CurrencyTest extends TestCase
{

	public function test_exception_on_unsupported_currency(): void
	{
		$this->assertThrows(
			test: fn() => CurrencyActions::currencyRateFromCode('API'),
			expectedMessage: CurrencyActions::UNSUPPORTED_CURRENCY_MESSAGE
		);
	}

	public function test_exception_on_missing_toke(): void
	{
		$this->assertThrows(
			test: fn() => CurrencyActions::currencyRateFromCode('EUR'),
			expectedMessage: CurrencyActions::MISSING_BMX_TOKEN_MESSAGE
		);
	}

	/**
	 * A basic unit test example.
	 */
	public function test_get_currency_rate(): void
	{
		$rate = CurrencyActions::currencyRateFromCode('EUR');
		$this->assertIsFloat($rate);
		$this->assertIsNumeric(actual: $rate);
	}
}
