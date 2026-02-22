import { AccountsGetMyAccounts$Params } from '../../../swagger/fn/accounts/accounts-get-my-accounts';

// @ts-ignore
export interface AccountsGetMyAccountsParams {
}

export function accountsGetMyAccountsAdapter(params?: AccountsGetMyAccountsParams): AccountsGetMyAccounts$Params {
  if (!params) {
    return {} as AccountsGetMyAccounts$Params;
  }
  return {
  };
}
