import { AccountsGetTransaction$Params } from '../../../swagger/fn/accounts/accounts-get-transaction';

// @ts-ignore
export interface AccountsGetTransactionParams {
  accountNumber: string;
  id: number;
}

export function accountsGetTransactionAdapter(params?: AccountsGetTransactionParams): AccountsGetTransaction$Params {
  if (!params) {
    return {} as AccountsGetTransaction$Params;
  }
  return {
      accountNumber: params.accountNumber,
      id: params.id,
  };
}
