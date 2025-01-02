export interface User {
    id: number;
    name: string;
    email: string;
    email_verified_at: string;
}

export type PageProps<T extends Record<string, unknown> = Record<string, unknown>> = T & {
    auth: {
        user: User;
    };
		canCreateUser: boolean,
		canCreatePermission: boolean,
		canAssignPermission: boolean,
		canViewInvoices: boolean,
		canUploadInvoices: boolean
};
