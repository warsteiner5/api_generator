import { AccountsGetTransactionsByAccount$Params } from '../../../swagger/fn/accounts/accounts-get-transactions-by-account';
import { SearchObjectAlt } from '../../models/search-object-alt.interface';
import { adaptApiSearchObjectAltDto } from '../../adapters/toDto/api-search-object.adapter';

export interface AccountsGetTransactionsByAccountParams {
  accountNumber: string;
  body?: SearchObjectAlt;
}

export const accountsGetTransactionsByAccountParamsAdapter = {
  adapt(params?: AccountsGetTransactionsByAccountParams): AccountsGetTransactionsByAccount$Params {
    if (!params) {
      return {} as AccountsGetTransactionsByAccount$Params;
    }
    return {
      accountNumber: params.accountNumber,
      body: adaptApiSearchObjectAltDto(params.body),
    };
  }
};
