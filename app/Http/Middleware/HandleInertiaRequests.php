<?php

namespace App\Http\Middleware;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Middleware;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that is loaded on the first page visit.
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determine the current asset version.
     */
    public function version(Request $request): string|null
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
				/**
				 * @var \App\Models\User $authenticatedUser
				 */
				$authenticatedUser = Auth::user();

        return [
            ...parent::share($request),
            'auth' => [
                'user' => $request->user(),
            ],
						'canCreateUser' => $authenticatedUser && $authenticatedUser->can(abilities: ['user_create']),
						'canCreatePermission' => $authenticatedUser && $authenticatedUser->can(abilities: ['permission_create']),
						'canAssignPermission' => $authenticatedUser && $authenticatedUser->can(abilities: ['user_permission_create'])

        ];
    }
}
