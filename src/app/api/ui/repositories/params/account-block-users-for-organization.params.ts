import { AccountBlockUsersForOrganization$Params } from '../../../swagger/fn/account/account-block-users-for-organization';

export interface AccountBlockUsersForOrganizationParams {
  body?: string[];
}

export const accountBlockUsersForOrganizationParamsAdapter = {
  adapt(params?: AccountBlockUsersForOrganizationParams): AccountBlockUsersForOrganization$Params {
    if (!params) {
      return {} as AccountBlockUsersForOrganization$Params;
    }
    return {
      body: params.body,
    };
  }
};
