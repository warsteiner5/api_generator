import { OrderExportToExcel$Params } from '../../../swagger/fn/order/order-export-to-excel';

// @ts-ignore
export interface OrderExportToExcelParams {
  body?: number[];
}

export function orderExportToExcelAdapter(params?: OrderExportToExcelParams): OrderExportToExcel$Params {
  if (!params) {
    return {} as OrderExportToExcel$Params;
  }
  return {
      body: params.body,
  };
}
