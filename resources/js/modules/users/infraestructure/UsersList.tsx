import { type UserWtPermissions } from "../domain/User.interface"
import { Accordion, AccordionItem } from "@nextui-org/accordion";
import { ChipUserPermissions } from "./ChipUserPermissions";

interface UsersListProps {

	users: UserWtPermissions[]

}

const UsersList = (props: UsersListProps) => {

	const { users } = props

	return (
		<Accordion>
			{users.map(user => (
				<AccordionItem
					key={user.id.toString()}
					aria-label={`${user.name} - ${user.email}`}
					subtitle={user.email}
					title={user.name}
				>
					<ChipUserPermissions userId={user.id} initialPermissions={user.permissions} />
				</AccordionItem>
			))}
		</Accordion>
	)


}

export { UsersList }