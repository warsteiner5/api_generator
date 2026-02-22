import { AccountGetUserRoles$Params } from '../../../swagger/fn/account/account-get-user-roles';

// @ts-ignore
export interface AccountGetUserRolesParams {
}

export function accountGetUserRolesAdapter(params?: AccountGetUserRolesParams): AccountGetUserRoles$Params {
  if (!params) {
    return {} as AccountGetUserRoles$Params;
  }
  return {
  };
}
