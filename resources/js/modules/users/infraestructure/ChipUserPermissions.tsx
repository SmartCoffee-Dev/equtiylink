import { Chip } from "@nextui-org/react"
import { type UserId } from "../domain/User.interface"

interface UserPermissionsProps {
	userId: UserId,
	permissions: any[]
}

export const ChipUserPermissions = (props: UserPermissionsProps) => {

	const { userId, permissions } = props

	return (
		<>
			{permissions.map(permission => (
				<Chip>
					{permission}
				</Chip>
			))}

			<Chip aria-label="Add permission" title="Add permission" className="opacity-80 hover:opacity-100 hover:cursor-pointer">
				➕ Permission
			</Chip>
		</>
	)

}