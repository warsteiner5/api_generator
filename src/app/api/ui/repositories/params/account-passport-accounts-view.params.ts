import { AccountPassportAccountsView$Params } from '../../../swagger/fn/account/account-passport-accounts-view';

// @ts-ignore
export interface AccountPassportAccountsViewParams {
  redirectUri: string;
}

export function accountPassportAccountsViewAdapter(params?: AccountPassportAccountsViewParams): AccountPassportAccountsView$Params {
  if (!params) {
    return {} as AccountPassportAccountsView$Params;
  }
  return {
      redirect_uri: params.redirectUri,
  };
}
