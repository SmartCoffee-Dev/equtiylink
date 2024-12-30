import { Chip } from "@nextui-org/react"
import { type UserId } from "../domain/User.interface"
import { AssignPermission } from "./AssignPermission"
import { Permission } from "../domain/Permission.interface"
import { useState } from "react"

interface UserPermissionsProps {
	userId: UserId,
	initialPermissions: Permission[]
}

export const ChipUserPermissions = (props: UserPermissionsProps) => {

	const { userId, initialPermissions } = props
	const [permissions, setPermissions] = useState(initialPermissions)

	return (
		<div className="flex flex-wrap gap-4">
			{permissions.map(permission => (
				<Chip key={`${userId}-${permission.id}`}>
					{permission.name}
				</Chip>
			))}

			<AssignPermission userId={userId} permissionsStateSetter={setPermissions} />
		</div>
	)

}