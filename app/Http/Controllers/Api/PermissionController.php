<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\PermissionResource;
use Illuminate\Http\Request;
use Spatie\Permission\Models\Permission;

class PermissionController extends Controller
{
	/**
	 * Display a listing of the resource.
	 */
	public function index()
	{
		$permissions = Permission::all();
		return PermissionResource::collection($permissions);
	}

	/**
	 * Store a newly created resource in storage.
	 */
	public function store(Request $request)
	{
		//
	}

	/**
	 * Display the specified resource.
	 */
	public function show(Permission $permission)
	{
		//
	}

	/**
	 * Update the specified resource in storage.
	 */
	public function update(Request $request, Permission $permission)
	{
		//
	}

	/**
	 * Remove the specified resource from storage.
	 */
	public function destroy(Permission $permission)
	{
		//
	}
}
