<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Invoice extends Model
{
	use HasFactory;

	protected $fillable = [
		'UUID',
		'folio',
		'emisor',
		'receptor',
		'moneda',
		'total',
		'tasa_de_cambio'
	];

	
}
