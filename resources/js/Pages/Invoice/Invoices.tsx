import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { InvoiceHeader } from '@/modules/invoices/infraestructure/InvoiceHeader';
import { PageProps } from '@/types';

interface InvoicesPageProps extends PageProps {
	state: string
}

export default function Invoices(props: InvoicesPageProps) {

	const { auth, state } = props

	return (<AuthenticatedLayout
		user={auth.user}
		header={<InvoiceHeader/>}
	>

		<h2 className='text-foreground'>
			{state}
		</h2>

	</AuthenticatedLayout>)


}