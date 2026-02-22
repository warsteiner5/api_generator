import { AccountsGetBanksDetailsListByAccount$Params } from '../../../swagger/fn/accounts/accounts-get-banks-details-list-by-account';

// @ts-ignore
export interface AccountsGetBanksDetailsListByAccountParams {
  accountNumber: string;
}

export function accountsGetBanksDetailsListByAccountAdapter(params?: AccountsGetBanksDetailsListByAccountParams): AccountsGetBanksDetailsListByAccount$Params {
  if (!params) {
    return {} as AccountsGetBanksDetailsListByAccount$Params;
  }
  return {
      accountNumber: params.accountNumber,
  };
}
