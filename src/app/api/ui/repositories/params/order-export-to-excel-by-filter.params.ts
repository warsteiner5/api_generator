import { OrderExportToExcelByFilter$Params } from '../../../swagger/fn/order/order-export-to-excel-by-filter';
import { OrderFilterObjectForCustomerAlt } from '../../models/order-filter-object-for-customer-alt.interface';
import { adaptApiOrderFilterObjectForCustomerAltDto } from '../../adapters/toDto/api-order-filter-object-for-customer.adapter';

export interface OrderExportToExcelByFilterParams {
  body?: OrderFilterObjectForCustomerAlt;
}

export const orderExportToExcelByFilterParamsAdapter = {
  adapt(params?: OrderExportToExcelByFilterParams): OrderExportToExcelByFilter$Params {
    if (!params) {
      return {} as OrderExportToExcelByFilter$Params;
    }
    return {
      body: adaptApiOrderFilterObjectForCustomerAltDto(params.body),
    };
  }
};
