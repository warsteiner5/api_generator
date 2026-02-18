import { AccountUnBlockUsersForOrganization$Params } from '../../../swagger/fn/account/account-un-block-users-for-organization';

export interface AccountUnBlockUsersForOrganizationParams {
  body?: string[];
}

export const accountUnBlockUsersForOrganizationParamsAdapter = {
  adapt(params?: AccountUnBlockUsersForOrganizationParams): AccountUnBlockUsersForOrganization$Params {
    if (!params) {
      return {} as AccountUnBlockUsersForOrganization$Params;
    }
    return {
      body: params.body,
    };
  }
};
