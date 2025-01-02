import { PageProps } from "@/types"
import { usePage } from "@inertiajs/react"
import { Link } from "@nextui-org/react"

export const InvoiceHeader = () => {

	const { canUploadInvoices } = usePage<PageProps>().props

	return (

		<div className="flex justify-between">

			<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Invoices</h2>

			<div>

				{
					canUploadInvoices && <Link isBlock color='foreground' href={route('invoice.create')} title='Upload invoice' aria-label='Upload Invoice' role='link'>➕ Invoice</Link>
				}

			</div>

		</div>
	)


}