type UserId = number;

interface BaseUser {
	id: UserId,
	email: string,
	name: string
}

interface UserWtPermissions extends BaseUser {

	permissions: any[]

}

export { type BaseUser, type UserWtPermissions, type UserId }