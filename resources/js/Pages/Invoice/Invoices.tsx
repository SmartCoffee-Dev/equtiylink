import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Invoice } from '@/modules/invoices/domain/Invoice.interface';
import { InvoiceEvents } from '@/modules/invoices/domain/InvoiceEvents.enum';
import { InvoiceHeader } from '@/modules/invoices/infraestructure/InvoiceHeader';
import { PageProps } from '@/types';
import { useEffect } from 'react';
import Swal from 'sweetalert2';
import { InvoicesTable } from '../../modules/invoices/infraestructure/InvoicesTable';

interface InvoicesPageProps extends PageProps {
	state: string,
	invoices: {data: Invoice[]}
}

export default function Invoices(props: InvoicesPageProps) {

	const { auth, state, invoices } = props

	console.log(invoices)

	useEffect(() => {
		
		if (state === InvoiceEvents.NEW_INVOICE_WAS_CREATED) {
			Swal.fire({
				title: 'Success',
				text: 'The invoice was successfully stored',
				icon: 'success',
				timer: 3000,
				showConfirmButton: true
			});
		}

	}, [state])

	return (<AuthenticatedLayout
		user={auth.user}
		header={<InvoiceHeader/>}
	>

		<InvoicesTable invoices={invoices.data}/>

	</AuthenticatedLayout>)


}