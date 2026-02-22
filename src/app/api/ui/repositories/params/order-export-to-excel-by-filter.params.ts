import { OrderExportToExcelByFilter$Params } from '../../../swagger/fn/order/order-export-to-excel-by-filter';
import { OrderFilterObjectForCustomerAlt } from '../../models/order-filter-object-for-customer-alt.interface';
import { apiOrderFilterObjectForCustomerAltDtoAdapter } from '../../adapters/models/api-order-filter-object-for-customer.adapter';

// @ts-ignore
export interface OrderExportToExcelByFilterParams {
  body?: OrderFilterObjectForCustomerAlt;
}

export function orderExportToExcelByFilterAdapter(params?: OrderExportToExcelByFilterParams): OrderExportToExcelByFilter$Params {
  if (!params) {
    return {} as OrderExportToExcelByFilter$Params;
  }
  return {
      body: apiOrderFilterObjectForCustomerAltDtoAdapter(params.body),
  };
}
