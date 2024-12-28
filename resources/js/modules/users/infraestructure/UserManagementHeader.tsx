import { Link } from '@nextui-org/react';


export const UserManagementHeader = () => {

	return (
		<div className="flex justify-between">

			<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">User Management</h2>

			<div>

				<Link isBlock color='foreground' href={route('user.create')}>➕ User</Link>

			</div>

		</div>
	)

}