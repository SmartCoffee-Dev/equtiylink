import { Chip } from "@nextui-org/react"
import { type UserId } from "../domain/User.interface"
import { AssignPermission } from "./AssignPermission"
import { Permission } from "../domain/Permission.interface"
import { useState } from "react"
import { usePage } from "@inertiajs/react"
import { PageProps } from "@inertiajs/core"

interface UserPermissionsProps {
	userId: UserId,
	initialPermissions: Permission[]
}

interface CanAssignPermission extends PageProps {
	canAssignPermission: boolean
}

export const ChipUserPermissions = (props: UserPermissionsProps) => {

	const { userId, initialPermissions } = props
	const [permissions, setPermissions] = useState(initialPermissions)
	const { canAssignPermission } = usePage<CanAssignPermission>().props

	return (
		<div className="flex flex-wrap gap-4">
			{permissions.map(permission => (
				<Chip key={`${userId}-${permission.id}`}>
					{permission.name}
				</Chip>
			))}

			{
				canAssignPermission && <AssignPermission userId={userId} permissionsStateSetter={setPermissions} />
			}
		</div>
	)

}