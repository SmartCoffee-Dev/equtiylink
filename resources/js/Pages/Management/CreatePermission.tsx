import { PageProps } from "@/types";
import { Head, useForm } from "@inertiajs/react";
import { FormEventHandler } from "react";
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import InputError from "@/Components/InputError";
import { Button } from "@nextui-org/react";

export default function CreatePermission({ auth }: PageProps) {

	const {
		data,
		setData,
		post,
		processing,
		errors
	} = useForm({
		name: ''
	})

	const submit: FormEventHandler = (e) => {
		e.preventDefault()
		post(route('permission.store'))
	}

	return (<AuthenticatedLayout
		user={auth.user}
		header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Create Permission</h2>}
	>


		<Head title="New Permission" />

		<form onSubmit={submit} className='
			max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
			flex flex-col gap-4 mt-4
			'>

			<div>
				<InputLabel htmlFor="name" value="Name" />

				<TextInput
					id="name"
					name="name"
					value={data.name}
					className="mt-1 block w-full"
					isFocused={true}
					onChange={(e) => setData('name', e.target.value)}
					required
				/>

				<InputError message={errors.name} className="mt-2" />
			</div>

			<Button type='submit' isDisabled={processing}>Create</Button>

		</form>

	</AuthenticatedLayout>)
}