<?php

namespace App\Modules\Invoices\Domain;

enum CurrencyRateEnum: string
{

	case SF43718 = 'USD';
	case SF46410 = 'EUR';
	case SF46406 = 'JPY';
	case SF46407 = 'GBP';
	case SF60632 = 'CAD';
}
