<?php

namespace App\Http\Controllers\Management;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use Inertia\Inertia;

class UserManagementController extends Controller
{
	/**
	 * Display a listing of the resource.
	 */
	public function index()
	{
		return Inertia::render(
			component: 'Management/UserManagement',
			props: [
				'users' => User::all()
			]);
	}

	/**
	 * Show the form for creating a new resource.
	 */
	public function create()
	{
		return Inertia::render(component: 'Management/CreateUser', props: []);
	}

	/**
	 * Store a newly created resource in storage.
	 */
	public function store(Request $request)
	{
		$request->validate(rules: [

			'name' => 'required|string|max:255',
			'email' => 'required|string|lowercase|email|max:255|unique:' . User::class,

		]);

		User::create([
			'name' => $request->name,
			'email' => $request->email,
			'password' => Hash::make(
				value: Str::random(24)
			)
		]);

		return redirect(to: route(name: 'user.list'));
	}

	/**
	 * Remove the specified resource from storage.
	 */
	public function destroy(User $user)
	{
		//
	}
}
