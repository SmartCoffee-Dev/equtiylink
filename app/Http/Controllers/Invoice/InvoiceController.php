<?php

namespace App\Http\Controllers\Invoice;

use App\Http\Controllers\Controller;
use App\Http\Resources\InvoiceResource;
use App\Models\Invoice;
use App\Modules\Invoices\Application\InvoiceActions;
use App\Modules\Invoices\Domain\InvoiceEventNames;
use Illuminate\Http\Request;
use Illuminate\Validation\Rules\File;
use Inertia\Inertia;

class InvoiceController extends Controller
{
	public function __construct()
	{
		$this->authorizeResource(model: \App\Models\Invoice::class);
	}

	/**
	 * Display a listing of the resource.
	 */
	public function index(Request $request)
	{
		return Inertia::render(
			component: 'Invoice/Invoices',
			props: [
				'state' => $request->state,
				'invoices' => InvoiceResource::collection(Invoice::all())
			]
		);
	}

	/**
	 * Show the form for creating a new resource.
	 */
	public function create()
	{
		return Inertia::render(component: 'Invoice/UploadInvoice');
	}

	/**
	 * Store a newly created resource in storage.
	 */
	public function store(Request $request)
	{
		$request->validate([
			'invoice' => [
				'required',
				File::types(['xml'])
					->min(0.1)
					->max(12)
			],
			'serie_de_cambio' => ['string', 'between:2,10']
		]);
		
		$file = $request->file('invoice');
		$xmlContent = $file->getContent();
		
		$invoice = InvoiceActions::xmlContentToInvoice($xmlContent);

		InvoiceActions::setCurrencyRate(
			invoice: $invoice,
			code: $invoice->moneda,
			serie: $request->serie_de_cambio === null || strlen($request->serie_de_cambio) == 0 ? null : $request->serie_de_cambio
		);

		$invoice->save();

		return redirect(to: route('invoice.list', ['state' => InvoiceEventNames::InvoiceWasCreated]));
	}
}
