import { ExternalDealExportToExcel$Params } from '../../../swagger/fn/external-deal/external-deal-export-to-excel';

// @ts-ignore
export interface ExternalDealExportToExcelParams {
  body?: number[];
}

export function externalDealExportToExcelAdapter(params?: ExternalDealExportToExcelParams): ExternalDealExportToExcel$Params {
  if (!params) {
    return {} as ExternalDealExportToExcel$Params;
  }
  return {
      body: params.body,
  };
}
