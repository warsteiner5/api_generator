import { ExternalDealExportToExcelForOperator$Params } from '../../../swagger/fn/external-deal/external-deal-export-to-excel-for-operator';

// @ts-ignore
export interface ExternalDealExportToExcelForOperatorParams {
  body?: number[];
}

export function externalDealExportToExcelForOperatorAdapter(params?: ExternalDealExportToExcelForOperatorParams): ExternalDealExportToExcelForOperator$Params {
  if (!params) {
    return {} as ExternalDealExportToExcelForOperator$Params;
  }
  return {
      body: params.body,
  };
}
