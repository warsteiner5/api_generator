import { AccountGetExternalUserInfo$Params } from '../../../swagger/fn/account/account-get-external-user-info';

export interface AccountGetExternalUserInfoParams {
}

export const accountGetExternalUserInfoParamsAdapter = {
  adapt(params?: AccountGetExternalUserInfoParams): AccountGetExternalUserInfo$Params {
    if (!params) {
      return {} as AccountGetExternalUserInfo$Params;
    }
    return {
    };
  }
};
