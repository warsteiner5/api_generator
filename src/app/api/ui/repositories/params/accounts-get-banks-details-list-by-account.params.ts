import { AccountsGetBanksDetailsListByAccount$Params } from '../../../swagger/fn/accounts/accounts-get-banks-details-list-by-account';

export interface AccountsGetBanksDetailsListByAccountParams {
  accountNumber: string;
}

export const accountsGetBanksDetailsListByAccountParamsAdapter = {
  adapt(params?: AccountsGetBanksDetailsListByAccountParams): AccountsGetBanksDetailsListByAccount$Params {
    if (!params) {
      return {} as AccountsGetBanksDetailsListByAccount$Params;
    }
    return {
      accountNumber: params.accountNumber,
    };
  }
};
