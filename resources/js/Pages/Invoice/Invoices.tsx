import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { InvoiceEvents } from '@/modules/invoices/domain/InvoiceEvents.enum';
import { InvoiceHeader } from '@/modules/invoices/infraestructure/InvoiceHeader';
import { PageProps } from '@/types';
import { useEffect } from 'react';
import Swal from 'sweetalert2';

interface InvoicesPageProps extends PageProps {
	state: string
}

export default function Invoices(props: InvoicesPageProps) {

	const { auth, state } = props

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

	</AuthenticatedLayout>)


}