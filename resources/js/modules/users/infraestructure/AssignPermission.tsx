import { Autocomplete, AutocompleteItem } from "@nextui-org/react"
import { UserId } from "../domain/User.interface"
import { useEffect, useState } from "react"
import { Permission, PermissionId } from "../domain/Permission.interface"
import { assignPermissionTo, getPermissions } from "../application/PermissionActions"

interface AssignPermissionProps {

	userId: UserId

}

export const AssignPermission = (props: AssignPermissionProps) => {

	const { userId } = props

	const [permissions, setPermissions] = useState<Permission[]>([])

	useEffect(() => {
		getPermissions()
			.then(fetchedPermissions => setPermissions(fetchedPermissions))
	}, [])

	return (<>
		<Autocomplete
			className="max-w-xs"
			defaultItems={permissions}
			placeholder="➕ Permission"
			title="Add Permission"
			aria-label="Add Permission"
			role="dialog"
			onSelectionChange={(key) => assignPermissionTo(userId, key as PermissionId)}
		>
			{(permission) => <AutocompleteItem key={permission.id}>{permission.name}</AutocompleteItem>}
		</Autocomplete>
	</>)


}