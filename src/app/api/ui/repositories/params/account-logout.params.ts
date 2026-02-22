import { AccountLogout$Params } from '../../../swagger/fn/account/account-logout';

// @ts-ignore
export interface AccountLogoutParams {
  returnUrl?: string;
  authenticationType?: string;
  oauthTokenId?: string;
}

export function accountLogoutAdapter(params?: AccountLogoutParams): AccountLogout$Params {
  if (!params) {
    return {} as AccountLogout$Params;
  }
  return {
      returnUrl: params.returnUrl,
      authenticationType: params.authenticationType,
      oauthTokenId: params.oauthTokenId,
  };
}
