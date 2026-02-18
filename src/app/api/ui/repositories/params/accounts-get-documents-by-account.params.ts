import { AccountsGetDocumentsByAccount$Params } from '../../../swagger/fn/accounts/accounts-get-documents-by-account';
import { SearchObjectAlt } from '../../models/search-object-alt.interface';
import { adaptApiSearchObjectAltDto } from '../../adapters/toDto/api-search-object.adapter';

export interface AccountsGetDocumentsByAccountParams {
  accountNumber: string;
  body?: SearchObjectAlt;
}

export const accountsGetDocumentsByAccountParamsAdapter = {
  adapt(params?: AccountsGetDocumentsByAccountParams): AccountsGetDocumentsByAccount$Params {
    if (!params) {
      return {} as AccountsGetDocumentsByAccount$Params;
    }
    return {
      accountNumber: params.accountNumber,
      body: adaptApiSearchObjectAltDto(params.body),
    };
  }
};
