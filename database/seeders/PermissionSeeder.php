<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class PermissionSeeder extends Seeder
{
	/**
	 * Run the database seeds.
	 */
	public function run(): void
	{
		$permissions = [
			'user_create',
			'permission_create',
			'permission_edit',
			'permission_list',
			'user_permission_create',
			'user_permission_delete'
		];

		foreach ($permissions as $permission) {
			Permission::create([
				'name' => $permission
			]);
		}

		Role::create(['name' => 'Super Admin']);
	}
}
