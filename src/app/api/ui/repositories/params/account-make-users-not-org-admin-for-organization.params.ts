import { AccountMakeUsersNotOrgAdminForOrganization$Params } from '../../../swagger/fn/account/account-make-users-not-org-admin-for-organization';

// @ts-ignore
export interface AccountMakeUsersNotOrgAdminForOrganizationParams {
  body?: string[];
}

export function accountMakeUsersNotOrgAdminForOrganizationAdapter(params?: AccountMakeUsersNotOrgAdminForOrganizationParams): AccountMakeUsersNotOrgAdminForOrganization$Params {
  if (!params) {
    return {} as AccountMakeUsersNotOrgAdminForOrganization$Params;
  }
  return {
      body: params.body,
  };
}
