import { AccountBlockUsersForOrganization$Params } from '../../../swagger/fn/account/account-block-users-for-organization';

// @ts-ignore
export interface AccountBlockUsersForOrganizationParams {
  body?: string[];
}

export function accountBlockUsersForOrganizationAdapter(params?: AccountBlockUsersForOrganizationParams): AccountBlockUsersForOrganization$Params {
  if (!params) {
    return {} as AccountBlockUsersForOrganization$Params;
  }
  return {
      body: params.body,
  };
}
