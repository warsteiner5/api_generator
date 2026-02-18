import { AccountsGetMyAccounts$Params } from '../../../swagger/fn/accounts/accounts-get-my-accounts';

export interface AccountsGetMyAccountsParams {
}

export const accountsGetMyAccountsParamsAdapter = {
  adapt(params?: AccountsGetMyAccountsParams): AccountsGetMyAccounts$Params {
    if (!params) {
      return {} as AccountsGetMyAccounts$Params;
    }
    return {
    };
  }
};
