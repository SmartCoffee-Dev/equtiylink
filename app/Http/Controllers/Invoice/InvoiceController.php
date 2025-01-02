<?php

namespace App\Http\Controllers\Invoice;

use App\Http\Controllers\Controller;
use App\Modules\Invoices\Application\InvoiceActions;
use app\Modules\Invoices\Domain\InvoiceEventNames;
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
		return Inertia::render(component: 'Invoice/Invoices', props: ['state' => $request->state]);
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
			]
		]);

		$file = $request->file('invoice');
		$xmlContent = $file->getContent();

		$invoice = InvoiceActions::xmlContentToInvoice($xmlContent);
		$invoice->save();

		return redirect(to: route('invoice.list', ['state' => InvoiceEventNames::InvoiceWasCreated]));
	}
}
