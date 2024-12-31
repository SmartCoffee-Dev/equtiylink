import { PageProps } from "@/types";
import { usePage } from "@inertiajs/react";
import { Link } from "@nextui-org/react";
import { useEffect, useState } from "react";

interface DashboardHeaderProps extends PageProps {
	canCreateUser: boolean,
	canCreatePermission: boolean,
	canAssignPermission: boolean
}

export const DashboardHeader = () => {

	const { canCreateUser, canCreatePermission, canAssignPermission } = usePage<DashboardHeaderProps>().props
	const [isUsersManager, setIsUserManager] = useState(false)

	useEffect(() => {

		setIsUserManager(
			canCreateUser || canCreatePermission || canAssignPermission
		)

		return;
	}, [canCreateUser, canCreatePermission, canAssignPermission])

	return (
		<div className="flex justify-between">

			<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Dashboard</h2>

			<div>

				{
					isUsersManager && <Link isBlock color='foreground' href={route('user.list')} title='Users Management Page' aria-label='Users Management Page' role='link'>👥 Users Management</Link>
				}

			</div>

		</div>
	)

}