import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { PageProps } from '@/types';
import { Head, useForm } from '@inertiajs/react';
import { Button } from '@nextui-org/react';
import { FormEventHandler } from 'react';

interface InvoiceForm {
	invoice?: File,
	currency?: string,
	serie_de_cambio?: string
}

export default function UploadInvoice(props: PageProps) {

	const { auth } = props

	const {
		setData,
		post,
		progress,
		processing,
		errors
	} = useForm<InvoiceForm>()

	const submit: FormEventHandler = (e) => {

		e.preventDefault()

		post(route('invoice.store'))

	}

	return (<AuthenticatedLayout
		user={auth.user}
		header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Upload Invoice</h2>}
	>

		<Head title="Upload Invoice" />

		<form onSubmit={submit} className='
		max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
		flex flex-col gap-4 mt-4
		'>

			<div>
				<InputLabel htmlFor="invoice" value="Invoice" />

				<TextInput
					id="invoice"
					type='file'
					multiple={false}
					name="invoice"
					className="mt-1 block w-full"
					isFocused={true}
					required
					accept='text/xml'
					onChange={e => setData('invoice', e.target.files ? e.target.files[0] : undefined)}
				/>

				<InputError message={errors.invoice} className="mt-2" />
			</div>

			<div>
				<InputLabel htmlFor="serie_de_cambio" value="Serie de Banxico" />

				<TextInput
					id="serie_de_cambio"
					type='text'
					name="serie_de_cambio"
					className="mt-1 block w-full"
					onChange={e => setData('serie_de_cambio', e.target.value)}
				/>

				<InputError message={errors.currency} className="mt-2" />
				<InputError message={errors.serie_de_cambio} className="mt-2" />
			</div>

			{progress && (
				<progress value={progress.percentage} max="100">
					{progress.percentage}%
				</progress>
			)}

			<Button type='submit' isDisabled={processing}>Create</Button>

		</form>


	</AuthenticatedLayout>)


}