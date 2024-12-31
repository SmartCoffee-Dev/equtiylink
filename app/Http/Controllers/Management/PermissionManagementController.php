<?php

namespace App\Http\Controllers\Management;

use App\Http\Controllers\Controller;
use Illuminate\Auth\Access\AuthorizationException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Spatie\Permission\Models\Permission;

class PermissionManagementController extends Controller
{
	/**
	 * Show the form for creating a new resource.
	 */
	public function create(Request  $request)
	{
		/**
		 * @var \App\Models\User $authenticatedUser
		 */
		$authenticatedUser = Auth::user();
	
		$canCreatePermission = $authenticatedUser->can('permission_create');
	
		if (!$canCreatePermission) {
			throw new AuthorizationException(message: 'Sorry, you are not allowed to create permissions.');
		}

		return Inertia::render(component: 'Management/CreatePermission');
	}

	/**
	 * Store a newly created resource in storage.
	 */
	public function store(Request $request)
	{
		/**
		 * @var \App\Models\User $authenticatedUser
		 */
		$authenticatedUser = Auth::user();

		$canCreatePermission = $authenticatedUser->can('permission_create');

		if (!$canCreatePermission) {
			throw new AuthorizationException(message: 'Sorry, you are not allowed to create permissions.');
		}

		$request->validate(rules: [
			'name' => [
				'required',
				'string',
				'between:3,255',
				'unique:' . Permission::class
			]
		]);

		Permission::create([
			'name' => $request->name
		]);

		return redirect(to: route(name: 'user.list'));
	}
}
