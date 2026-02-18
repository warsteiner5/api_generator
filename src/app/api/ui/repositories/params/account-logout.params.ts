import { AccountLogout$Params } from '../../../swagger/fn/account/account-logout';

export interface AccountLogoutParams {
  returnUrl?: string;
  authenticationType?: string;
  oauthTokenId?: string;
}

export const accountLogoutParamsAdapter = {
  adapt(params?: AccountLogoutParams): AccountLogout$Params {
    if (!params) {
      return {} as AccountLogout$Params;
    }
    return {
      returnUrl: params.returnUrl,
      authenticationType: params.authenticationType,
      oauthTokenId: params.oauthTokenId,
    };
  }
};
