<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class InvoiceResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
					'id' => $this->id,
					'uuid' => $this->uuid,
					'folio' => $this->folio,
					'emisor' => $this->emisor,
					'receptor' => $this->receptor,
					'moneda' => $this->moneda,
					'total' => $this->total,
					'tasaDeCambio' => $this->tasa_de_cambio,
				];
    }
}
