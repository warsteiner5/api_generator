import { AccountMakeUsersOrgAdminForOrganization$Params } from '../../../swagger/fn/account/account-make-users-org-admin-for-organization';

// @ts-ignore
export interface AccountMakeUsersOrgAdminForOrganizationParams {
  body?: string[];
}

export function accountMakeUsersOrgAdminForOrganizationAdapter(params?: AccountMakeUsersOrgAdminForOrganizationParams): AccountMakeUsersOrgAdminForOrganization$Params {
  if (!params) {
    return {} as AccountMakeUsersOrgAdminForOrganization$Params;
  }
  return {
      body: params.body,
  };
}
