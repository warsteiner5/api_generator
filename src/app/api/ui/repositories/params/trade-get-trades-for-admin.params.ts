import { TradeGetTradesForAdmin$Params } from '../../../swagger/fn/trade/trade-get-trades-for-admin';
import { TradesFilterObjectForCustomerAlt } from '../../models/trades-filter-object-for-customer-alt.interface';
import { apiTradesFilterObjectForCustomerAltDtoAdapter } from '../../adapters/models/api-trades-filter-object-for-customer.adapter';

// @ts-ignore
export interface TradeGetTradesForAdminParams {
  body?: TradesFilterObjectForCustomerAlt;
}

export function tradeGetTradesForAdminAdapter(params?: TradeGetTradesForAdminParams): TradeGetTradesForAdmin$Params {
  if (!params) {
    return {} as TradeGetTradesForAdmin$Params;
  }
  return {
      body: apiTradesFilterObjectForCustomerAltDtoAdapter(params.body),
  };
}
