import { TradeExportToExcelByFilter$Params } from '../../../swagger/fn/trade/trade-export-to-excel-by-filter';
import { TradesFilterObjectForCustomerAlt } from '../../models/trades-filter-object-for-customer-alt.interface';
import { apiTradesFilterObjectForCustomerAltDtoAdapter } from '../../adapters/models/api-trades-filter-object-for-customer.adapter';

// @ts-ignore
export interface TradeExportToExcelByFilterParams {
  body?: TradesFilterObjectForCustomerAlt;
}

export function tradeExportToExcelByFilterAdapter(params?: TradeExportToExcelByFilterParams): TradeExportToExcelByFilter$Params {
  if (!params) {
    return {} as TradeExportToExcelByFilter$Params;
  }
  return {
      body: apiTradesFilterObjectForCustomerAltDtoAdapter(params.body),
  };
}
