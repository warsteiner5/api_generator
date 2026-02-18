import { AccountsGetBanksDetailsByAccount$Params } from '../../../swagger/fn/accounts/accounts-get-banks-details-by-account';

export interface AccountsGetBanksDetailsByAccountParams {
  accountNumber: string;
}

export const accountsGetBanksDetailsByAccountParamsAdapter = {
  adapt(params?: AccountsGetBanksDetailsByAccountParams): AccountsGetBanksDetailsByAccount$Params {
    if (!params) {
      return {} as AccountsGetBanksDetailsByAccount$Params;
    }
    return {
      accountNumber: params.accountNumber,
    };
  }
};
