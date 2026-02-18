import { TradeGetTradesForAdmin$Params } from '../../../swagger/fn/trade/trade-get-trades-for-admin';
import { TradesFilterObjectForCustomerAlt } from '../../models/trades-filter-object-for-customer-alt.interface';
import { adaptApiTradesFilterObjectForCustomerAltDto } from '../../adapters/toDto/api-trades-filter-object-for-customer.adapter';

export interface TradeGetTradesForAdminParams {
  body?: TradesFilterObjectForCustomerAlt;
}

export const tradeGetTradesForAdminParamsAdapter = {
  adapt(params?: TradeGetTradesForAdminParams): TradeGetTradesForAdmin$Params {
    if (!params) {
      return {} as TradeGetTradesForAdmin$Params;
    }
    return {
      body: adaptApiTradesFilterObjectForCustomerAltDto(params.body),
    };
  }
};
