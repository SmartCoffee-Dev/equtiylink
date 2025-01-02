<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * @property string $uuid
 * @property string $folio
 * @property string $emisor
 * @property string $receptor
 * @property string $moneda
 * @property float $total
 * @property float $tasa_de_cambio
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
