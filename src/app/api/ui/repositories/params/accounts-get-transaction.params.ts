import { AccountsGetTransaction$Params } from '../../../swagger/fn/accounts/accounts-get-transaction';

export interface AccountsGetTransactionParams {
  accountNumber: string;
  id: number;
}

export const accountsGetTransactionParamsAdapter = {
  adapt(params?: AccountsGetTransactionParams): AccountsGetTransaction$Params {
    if (!params) {
      return {} as AccountsGetTransaction$Params;
    }
    return {
      accountNumber: params.accountNumber,
      id: params.id,
    };
  }
};
