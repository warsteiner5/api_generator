import { AccountGetUserRoles$Params } from '../../../swagger/fn/account/account-get-user-roles';

export interface AccountGetUserRolesParams {
}

export const accountGetUserRolesParamsAdapter = {
  adapt(params?: AccountGetUserRolesParams): AccountGetUserRoles$Params {
    if (!params) {
      return {} as AccountGetUserRoles$Params;
    }
    return {
    };
  }
};
