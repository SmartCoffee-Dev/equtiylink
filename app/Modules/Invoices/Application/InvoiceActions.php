<?php

namespace App\Modules\Invoices\Application;

use App\Models\Invoice;
use Nette\NotImplementedException;

class InvoiceActions
{

	static function xmlContentToAssosiativeArray(string $xmlContent)
	{
		$xmlContent = str_replace(search: '<tfd:', replace: '<cfdi:', subject: $xmlContent);
		$xmlContent = str_replace(search: '<cfdi:', replace: '<', subject: $xmlContent);
		$xmlContent = str_replace(search: '</cfdi:', replace: '</', subject: $xmlContent);

		$xmlObject = simplexml_load_string(utf8_encode($xmlContent));

		$xmlObjectEncoded = json_encode($xmlObject);
		$xmlObjectEncoded = str_replace(search: '@attributes', replace: "attributes", subject: $xmlObjectEncoded);

		return json_decode($xmlObjectEncoded, true);
	}

	static function arrayToInvoice(array $array): Invoice
	{

		$uuid = (string) $array['Complemento']['TimbreFiscalDigital']['attributes']['UUID'];
		$uuidSegments = explode(separator: '-', string: $uuid);

		$fields = [
			'uuid' => $uuid,
			'folio' => $array['attributes']['Folio'] ?? end($uuidSegments),
			'emisor' => $array['Emisor']['attributes']['Nombre'],
			'receptor' => $array['Receptor']['attributes']['Nombre'],
			'moneda' => $array['attributes']['Moneda'],
			'total' => (float) $array['attributes']['Total'],
		];

		return new Invoice($fields);
	}

	static function xmlContentToInvoice(string $xmlContent): Invoice
	{
		$array = Self::xmlContentToAssosiativeArray($xmlContent);
		return Self::arrayToInvoice($array);
	}

	static function validateInvoice()
	{
		throw new NotImplementedException();
	}
}
