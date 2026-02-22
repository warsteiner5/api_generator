import { AccountsGetBanksDetailsByAccount$Params } from '../../../swagger/fn/accounts/accounts-get-banks-details-by-account';

// @ts-ignore
export interface AccountsGetBanksDetailsByAccountParams {
  accountNumber: string;
}

export function accountsGetBanksDetailsByAccountAdapter(params?: AccountsGetBanksDetailsByAccountParams): AccountsGetBanksDetailsByAccount$Params {
  if (!params) {
    return {} as AccountsGetBanksDetailsByAccount$Params;
  }
  return {
      accountNumber: params.accountNumber,
  };
}
