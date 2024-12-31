import { Autocomplete, AutocompleteItem } from "@nextui-org/react"
import { UserId } from "../domain/User.interface"
import { Key, useEffect, useState } from "react"
import { Permission, PermissionId } from "../domain/Permission.interface"
import { assignPermissionTo, getPermissions } from "../application/PermissionActions"

interface AssignPermissionProps {

	userId: UserId,

	permissionsStateSetter: React.Dispatch<React.SetStateAction<Permission[]>>

}

export const AssignPermission = (props: AssignPermissionProps) => {

	const { userId, permissionsStateSetter } = props

	const [availablePermissions, setAvailablePermissions] = useState<Permission[]>([])

	const handleSelectionChange = (key: Key | null) => {

		if (key === null) return;

		assignPermissionTo(userId, key as PermissionId)
			.then(newUserPermissions => permissionsStateSetter(newUserPermissions));

	}

	useEffect(() => {
		getPermissions()
			.then(fetchedPermissions => setAvailablePermissions(fetchedPermissions))
	}, [])

	return (<>
		<Autocomplete
			className="max-w-xs"
			defaultItems={availablePermissions}
			placeholder="➕ Permission"
			title="Add Permission"
			aria-label="Add Permission"
			role="dialog"
			onSelectionChange={handleSelectionChange}
		>
			{(permission) => <AutocompleteItem key={permission.id}>{permission.name}</AutocompleteItem>}
		</Autocomplete>
	</>)


}