import { AccountUnBlockUsersForOrganization$Params } from '../../../swagger/fn/account/account-un-block-users-for-organization';

// @ts-ignore
export interface AccountUnBlockUsersForOrganizationParams {
  body?: string[];
}

export function accountUnBlockUsersForOrganizationAdapter(params?: AccountUnBlockUsersForOrganizationParams): AccountUnBlockUsersForOrganization$Params {
  if (!params) {
    return {} as AccountUnBlockUsersForOrganization$Params;
  }
  return {
      body: params.body,
  };
}
