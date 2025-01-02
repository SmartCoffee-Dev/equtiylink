import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { PageProps } from '@/types';

interface InvoicesPageProps extends PageProps {
	state: string
}

export default function Invoices(props: InvoicesPageProps) {

	const { auth, state } = props

	return (<AuthenticatedLayout
		user={auth.user}
		header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Invoices</h2>}
	>

		<h2 className='text-foreground'>
			{state}
		</h2>

	</AuthenticatedLayout>)


}