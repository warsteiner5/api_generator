import { AccountsGetExternalUserInfo$Params } from '../../../swagger/fn/accounts/accounts-get-external-user-info';

export interface AccountsGetExternalUserInfoParams {
}

export const accountsGetExternalUserInfoParamsAdapter = {
  adapt(params?: AccountsGetExternalUserInfoParams): AccountsGetExternalUserInfo$Params {
    if (!params) {
      return {} as AccountsGetExternalUserInfo$Params;
    }
    return {
    };
  }
};
