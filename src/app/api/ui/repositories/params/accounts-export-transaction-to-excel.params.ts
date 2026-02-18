import { AccountsExportTransactionToExcel$Params } from '../../../swagger/fn/accounts/accounts-export-transaction-to-excel';
import { SearchObjectAlt } from '../../models/search-object-alt.interface';
import { adaptApiSearchObjectAltDto } from '../../adapters/toDto/api-search-object.adapter';

export interface AccountsExportTransactionToExcelParams {
  accountNumber: string;
  body?: SearchObjectAlt;
}

export const accountsExportTransactionToExcelParamsAdapter = {
  adapt(params?: AccountsExportTransactionToExcelParams): AccountsExportTransactionToExcel$Params {
    if (!params) {
      return {} as AccountsExportTransactionToExcel$Params;
    }
    return {
      accountNumber: params.accountNumber,
      body: adaptApiSearchObjectAltDto(params.body),
    };
  }
};
