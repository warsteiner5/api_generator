import { ExternalDealExportToExcelForOperator$Params } from '../../../swagger/fn/external-deal/external-deal-export-to-excel-for-operator';

export interface ExternalDealExportToExcelForOperatorParams {
  body?: number[];
}

export const externalDealExportToExcelForOperatorParamsAdapter = {
  adapt(params?: ExternalDealExportToExcelForOperatorParams): ExternalDealExportToExcelForOperator$Params {
    if (!params) {
      return {} as ExternalDealExportToExcelForOperator$Params;
    }
    return {
      body: params.body,
    };
  }
};
