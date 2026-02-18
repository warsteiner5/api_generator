import { AccountMakeUsersNotOrgAdminForOrganization$Params } from '../../../swagger/fn/account/account-make-users-not-org-admin-for-organization';

export interface AccountMakeUsersNotOrgAdminForOrganizationParams {
  body?: string[];
}

export const accountMakeUsersNotOrgAdminForOrganizationParamsAdapter = {
  adapt(params?: AccountMakeUsersNotOrgAdminForOrganizationParams): AccountMakeUsersNotOrgAdminForOrganization$Params {
    if (!params) {
      return {} as AccountMakeUsersNotOrgAdminForOrganization$Params;
    }
    return {
      body: params.body,
    };
  }
};
