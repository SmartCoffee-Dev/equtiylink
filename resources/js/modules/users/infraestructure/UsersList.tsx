import { type UserWtPermissions } from "../domain/User.interface"
import { Accordion, AccordionItem } from "@nextui-org/accordion";
import { useEffect, useState } from 'react';
import { ChipUserPermissions } from "./ChipUserPermissions";

interface UsersListProps {

	users: UserWtPermissions[]

}

const UsersList = (props: UsersListProps) => {

	const { users } = props
	const [activeKeys, setActiveKeys] = useState<string[]>([])

	useEffect(() => {
		const newActiveKeys = users.map(user => user.id.toString())
		setActiveKeys(newActiveKeys)
	}, [users])

	return (
		<Accordion selectedKeys={activeKeys}>
			{users.map(user => (
				<AccordionItem
					key={user.id.toString()}
					aria-label={`${user.name} - ${user.email}`}
					subtitle={user.email}
					title={user.name}
				>
					<ChipUserPermissions userId={user.id} permissions={user.permissions} />
				</AccordionItem>
			))}
		</Accordion>
	)


}

export { UsersList }