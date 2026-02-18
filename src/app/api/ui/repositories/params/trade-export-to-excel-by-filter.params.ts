import { TradeExportToExcelByFilter$Params } from '../../../swagger/fn/trade/trade-export-to-excel-by-filter';
import { TradesFilterObjectForCustomerAlt } from '../../models/trades-filter-object-for-customer-alt.interface';
import { adaptApiTradesFilterObjectForCustomerAltDto } from '../../adapters/toDto/api-trades-filter-object-for-customer.adapter';

export interface TradeExportToExcelByFilterParams {
  body?: TradesFilterObjectForCustomerAlt;
}

export const tradeExportToExcelByFilterParamsAdapter = {
  adapt(params?: TradeExportToExcelByFilterParams): TradeExportToExcelByFilter$Params {
    if (!params) {
      return {} as TradeExportToExcelByFilter$Params;
    }
    return {
      body: adaptApiTradesFilterObjectForCustomerAltDto(params.body),
    };
  }
};
