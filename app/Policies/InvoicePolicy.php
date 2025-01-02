<?php

namespace App\Policies;

use App\Models\Invoice;
use App\Models\User;
use Illuminate\Auth\Access\AuthorizationException;

class InvoicePolicy
{
	/**
	 * Determine whether the user can view any models.
	 */
	public function viewAny(User $user): bool
	{
		if (!$user->can('view-invoices')) {
			throw new AuthorizationException('Sorry, you cannot list invoices.');
		}

		return true;
	}

	/**
	 * Determine whether the user can view the model.
	 */
	public function view(User $user, Invoice $invoice): bool
	{
		if (!$user->can('view-invoices')) {
			throw new AuthorizationException('Sorry, you cannot access any invoice.');
		}

		return true;
	}

	/**
	 * Determine whether the user can create models.
	 */
	public function create(User $user): bool
	{
		if (!$user->can('upload-invoices')) {
			throw new AuthorizationException('Sorry, you cannot upload invoices.');
		}

		return true;
	}

	/**
	 * Determine whether the user can update the model.
	 */
	public function update(User $user, Invoice $invoice): bool
	{
		return false;
	}

	/**
	 * Determine whether the user can delete the model.
	 */
	public function delete(User $user, Invoice $invoice): bool
	{
		return false;
	}

	/**
	 * Determine whether the user can restore the model.
	 */
	public function restore(User $user, Invoice $invoice): bool
	{
		return false;
	}

	/**
	 * Determine whether the user can permanently delete the model.
	 */
	public function forceDelete(User $user, Invoice $invoice): bool
	{
		return false;
	}
}
