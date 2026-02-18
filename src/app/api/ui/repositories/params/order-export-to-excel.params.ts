import { OrderExportToExcel$Params } from '../../../swagger/fn/order/order-export-to-excel';

export interface OrderExportToExcelParams {
  body?: number[];
}

export const orderExportToExcelParamsAdapter = {
  adapt(params?: OrderExportToExcelParams): OrderExportToExcel$Params {
    if (!params) {
      return {} as OrderExportToExcel$Params;
    }
    return {
      body: params.body,
    };
  }
};
