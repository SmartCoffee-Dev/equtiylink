<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
	/**
	 * Run the database seeds.
	 */
	public function run(): void
	{

		/**
		 * @var User $admin
		 */
		$admin = User::create([
			'name' => 'Super Admin',
			'email' => 'super.equitylink@yopmail.com',
			'password' => Hash::make(value: 'password')
		]);

		$admin->assignRole('Super Admin');
	}
}
