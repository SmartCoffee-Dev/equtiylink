import { BaseUser } from "../domain/User.interface"
import { Accordion, AccordionItem } from "@nextui-org/accordion";

interface UsersListProps {

	users: BaseUser[]

}

const UsersList = (props: UsersListProps) => {

	const { users } = props

	return (

		<Accordion>
			{users.map(user => (
				<AccordionItem
					key={user.id}
					aria-label={`${user.name} - ${user.email}`}
					subtitle={user.email}
					title={user.name}
				>
				</AccordionItem>
			))}
		</Accordion>
	)


}

export { UsersList }