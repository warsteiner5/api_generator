import { AccountMakeUsersOrgAdminForOrganization$Params } from '../../../swagger/fn/account/account-make-users-org-admin-for-organization';

export interface AccountMakeUsersOrgAdminForOrganizationParams {
  body?: string[];
}

export const accountMakeUsersOrgAdminForOrganizationParamsAdapter = {
  adapt(params?: AccountMakeUsersOrgAdminForOrganizationParams): AccountMakeUsersOrgAdminForOrganization$Params {
    if (!params) {
      return {} as AccountMakeUsersOrgAdminForOrganization$Params;
    }
    return {
      body: params.body,
    };
  }
};
