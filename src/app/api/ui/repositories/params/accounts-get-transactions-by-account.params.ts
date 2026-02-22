import { AccountsGetTransactionsByAccount$Params } from '../../../swagger/fn/accounts/accounts-get-transactions-by-account';
import { SearchObjectAlt } from '../../models/search-object-alt.interface';
import { apiSearchObjectAltDtoAdapter } from '../../adapters/models/api-search-object.adapter';

// @ts-ignore
export interface AccountsGetTransactionsByAccountParams {
  accountNumber: string;
  body?: SearchObjectAlt;
}

export function accountsGetTransactionsByAccountAdapter(params?: AccountsGetTransactionsByAccountParams): AccountsGetTransactionsByAccount$Params {
  if (!params) {
    return {} as AccountsGetTransactionsByAccount$Params;
  }
  return {
      accountNumber: params.accountNumber,
      body: apiSearchObjectAltDtoAdapter(params.body),
  };
}
