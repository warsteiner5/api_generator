import { TradeGetTradesForCustomer$Params } from '../../../swagger/fn/trade/trade-get-trades-for-customer';
import { TradesFilterObjectForCustomerAlt } from '../../models/trades-filter-object-for-customer-alt.interface';
import { apiTradesFilterObjectForCustomerAltDtoAdapter } from '../../adapters/models/api-trades-filter-object-for-customer.adapter';

// @ts-ignore
export interface TradeGetTradesForCustomerParams {
  body?: TradesFilterObjectForCustomerAlt;
}

export function tradeGetTradesForCustomerAdapter(params?: TradeGetTradesForCustomerParams): TradeGetTradesForCustomer$Params {
  if (!params) {
    return {} as TradeGetTradesForCustomer$Params;
  }
  return {
      body: apiTradesFilterObjectForCustomerAltDtoAdapter(params.body),
  };
}
