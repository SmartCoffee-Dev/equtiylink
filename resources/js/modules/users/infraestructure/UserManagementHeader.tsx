import { PageProps } from '@inertiajs/core';
import { usePage } from '@inertiajs/react';
import { Link } from '@nextui-org/react';

interface UserManagementHeaderProps extends PageProps {
	canCreateUser: boolean,
	canCreatePermission: boolean
}

export const UserManagementHeader = () => {

	const { canCreateUser, canCreatePermission } = usePage<UserManagementHeaderProps>().props

	return (
		<div className="flex justify-between">

			<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">User Management</h2>

			<div>

				{
					canCreatePermission && <Link isBlock color='foreground' href={route('permission.create')} title='Create Permission' aria-label='Create New Permission' role='link'>➕ Permission</Link>
				}

				{
					canCreateUser && <Link isBlock color='foreground' href={route('user.create')} title='Create User' aria-label='Create New User' role='link'>➕ User</Link>
				}

			</div>

		</div>
	)

}