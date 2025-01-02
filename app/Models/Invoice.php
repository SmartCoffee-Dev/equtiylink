<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * @var string $uuid
 * @var string $folio
 * @var string $emisor
 * @var string $receptor
 * @var string $moneda
 * @var float $total
 * @var float $tasa_de_cambio
 */
class Invoice extends Model
{
	use HasFactory;

	protected $fillable = [
		'uuid',
		'folio',
		'emisor',
		'receptor',
		'moneda',
		'total',
		'tasa_de_cambio'
	];

	
}
