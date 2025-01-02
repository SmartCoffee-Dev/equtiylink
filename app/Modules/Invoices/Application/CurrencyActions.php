<?php

namespace App\Modules\Invoices\Application;

use App\Modules\Invoices\Domain\CurrencyRateEnum;
use Exception;
use Illuminate\Support\Facades\Http;

class CurrencyActions
{

	const UNSUPPORTED_CURRENCY_MESSAGE = 'Unsupported currency. Please, try from the series-code';
	const MISSING_BMX_TOKEN_MESSAGE = 'Missing Bim Token';

	static function currencyRateFromCode(string $code): float
	{

		$currencyCase = CurrencyRateEnum::tryFrom($code);

		if (!$currencyCase) {
			throw new Exception(message: self::UNSUPPORTED_CURRENCY_MESSAGE, code: 422);
		}

		return self::currencyRateFromSerie($currencyCase->name);
	}

	static function currencyRateFromSerie(string $serie): float
	{

		$bmxToken = env('BANXICO_TOKEN');

		if (!$bmxToken) {
			throw new Exception(message: self::MISSING_BMX_TOKEN_MESSAGE);
		}

		$response = Http::withHeaders([
			'Bmx-Token' => env(key: 'BANXICO_TOKEN')
		])
			->acceptJson()
			->get("https://www.banxico.org.mx/SieAPIRest/service/v1/series/$serie/datos/oportuno");

		$jsonResponse = $response->json();

		return (float) $jsonResponse['bmx']['series'][0]['datos'][0]['dato'];
	}
}
