import { AccountPassportAccountsView$Params } from '../../../swagger/fn/account/account-passport-accounts-view';

export interface AccountPassportAccountsViewParams {
  redirectUri: string;
}

export const accountPassportAccountsViewParamsAdapter = {
  adapt(params?: AccountPassportAccountsViewParams): AccountPassportAccountsView$Params {
    if (!params) {
      return {} as AccountPassportAccountsView$Params;
    }
    return {
      redirect_uri: params.redirectUri,
    };
  }
};
