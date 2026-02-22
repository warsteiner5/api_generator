import { AccountsGetDocumentsByAccount$Params } from '../../../swagger/fn/accounts/accounts-get-documents-by-account';
import { SearchObjectAlt } from '../../models/search-object-alt.interface';
import { apiSearchObjectAltDtoAdapter } from '../../adapters/models/api-search-object.adapter';

// @ts-ignore
export interface AccountsGetDocumentsByAccountParams {
  accountNumber: string;
  body?: SearchObjectAlt;
}

export function accountsGetDocumentsByAccountAdapter(params?: AccountsGetDocumentsByAccountParams): AccountsGetDocumentsByAccount$Params {
  if (!params) {
    return {} as AccountsGetDocumentsByAccount$Params;
  }
  return {
      accountNumber: params.accountNumber,
      body: apiSearchObjectAltDtoAdapter(params.body),
  };
}
