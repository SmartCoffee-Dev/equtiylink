import { Link } from '@nextui-org/react';


export const UserManagementHeader = () => {

	return (
		<div className="flex justify-between">

			<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">User Management</h2>

			<div>

				<Link isBlock color='foreground' href={route('permission.create')} title='Create Permission' aria-label='Create New Permission' role='link'>➕ Permission</Link>
				<Link isBlock color='foreground' href={route('user.create')} title='Create User' aria-label='Create New User' role='link'>➕ User</Link>

			</div>

		</div>
	)

}