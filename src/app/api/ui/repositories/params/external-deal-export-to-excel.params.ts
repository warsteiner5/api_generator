import { ExternalDealExportToExcel$Params } from '../../../swagger/fn/external-deal/external-deal-export-to-excel';

export interface ExternalDealExportToExcelParams {
  body?: number[];
}

export const externalDealExportToExcelParamsAdapter = {
  adapt(params?: ExternalDealExportToExcelParams): ExternalDealExportToExcel$Params {
    if (!params) {
      return {} as ExternalDealExportToExcel$Params;
    }
    return {
      body: params.body,
    };
  }
};
