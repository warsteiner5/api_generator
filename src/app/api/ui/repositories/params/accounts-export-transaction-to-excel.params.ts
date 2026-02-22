import { AccountsExportTransactionToExcel$Params } from '../../../swagger/fn/accounts/accounts-export-transaction-to-excel';
import { SearchObjectAlt } from '../../models/search-object-alt.interface';
import { apiSearchObjectAltDtoAdapter } from '../../adapters/models/api-search-object.adapter';

// @ts-ignore
export interface AccountsExportTransactionToExcelParams {
  accountNumber: string;
  body?: SearchObjectAlt;
}

export function accountsExportTransactionToExcelAdapter(params?: AccountsExportTransactionToExcelParams): AccountsExportTransactionToExcel$Params {
  if (!params) {
    return {} as AccountsExportTransactionToExcel$Params;
  }
  return {
      accountNumber: params.accountNumber,
      body: apiSearchObjectAltDtoAdapter(params.body),
  };
}
