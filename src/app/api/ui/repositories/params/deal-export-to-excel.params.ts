import { DealExportToExcel$Params } from '../../../swagger/fn/deal/deal-export-to-excel';

// @ts-ignore
export interface DealExportToExcelParams {
  body?: number[];
}

export function dealExportToExcelAdapter(params?: DealExportToExcelParams): DealExportToExcel$Params {
  if (!params) {
    return {} as DealExportToExcel$Params;
  }
  return {
      body: params.body,
  };
}
