<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\PermissionResource;
use App\Models\User;
use Illuminate\Auth\Access\AuthorizationException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Spatie\Permission\Models\Permission;

class UserPermissionController extends Controller
{

	/**
	 * Store a newly created resource in storage.
	 */
	public function store(Request $request, User $user, Permission $permission)
	{
		/**
		 * @var \App\Models\User $authenticatedUser
		 */
		$authenticatedUser = Auth::user();

		$canAssignPermission = $authenticatedUser->can('user_permission_create');

		if (!$canAssignPermission) {
			throw new AuthorizationException(message: 'Sorry, you are not allowed to assign permissions');
		}

		$user->givePermissionTo($permission->name);

		return new PermissionResource($permission);
		
	}

	/**
	 * Remove the specified resource from storage.
	 */
	public function destroy(User $user)
	{
		//
	}
}
