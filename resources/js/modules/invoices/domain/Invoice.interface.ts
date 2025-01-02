type InvoiceId = number;

interface UnsavedInvoice {

	uuid: string
	folio: string
	emisor: string
	receptor: string
	moneda: string
	total: number
	tasaDeCambio: number

}

interface Invoice extends UnsavedInvoice {

	id: InvoiceId

}

export type {

	InvoiceId,
	UnsavedInvoice,
	Invoice

}