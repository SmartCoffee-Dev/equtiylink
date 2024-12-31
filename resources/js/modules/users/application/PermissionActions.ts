import type { Permission, PermissionId } from "../domain/Permission.interface"
import type { UserId } from "../domain/User.interface"

export const getPermissions: () => Promise<Permission[]> = () => {

	return fetch(route('api.permissions.index'))
		.then(httpResponse => httpResponse.json())
		.then(apiResponse => apiResponse.data);

}

export const assignPermissionTo:
	(userId: UserId, permissionId: PermissionId) => Promise<Permission[]> =
	(userId: UserId, permissionId: PermissionId) => {

		return fetch(route('api.user-permission.store', {
			user: userId,
			permission: permissionId
		}), {
			method: 'POST',
			headers: {
				'Accept': 'application/json'
			},
		})
			.then(httpResponse => httpResponse.json())
			.then(jsonResponse => jsonResponse.data as Permission[]);

	}