import { DealExportToExcel$Params } from '../../../swagger/fn/deal/deal-export-to-excel';

export interface DealExportToExcelParams {
  body?: number[];
}

export const dealExportToExcelParamsAdapter = {
  adapt(params?: DealExportToExcelParams): DealExportToExcel$Params {
    if (!params) {
      return {} as DealExportToExcel$Params;
    }
    return {
      body: params.body,
    };
  }
};
