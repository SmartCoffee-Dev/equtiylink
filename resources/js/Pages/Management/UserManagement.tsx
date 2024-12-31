import { PageProps } from "@/types";
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from "@inertiajs/react";
import { UserManagementHeader } from "@/modules/users/infraestructure/UserManagementHeader";
import { UsersList } from "@/modules/users/infraestructure/UsersList";
import { type UserWtPermissions } from "@/modules/users/domain/User.interface";


interface UserManagementPageProps extends PageProps {

	users: UserWtPermissions[]

}

export default function UserManagementPage(props: UserManagementPageProps) {

	const { auth, users } = props

	return (
		<AuthenticatedLayout
			user={auth.user}
			header={<UserManagementHeader />}
		>

			<Head title="User Management" />

			<UsersList users={users} />



		</AuthenticatedLayout>
	)

}