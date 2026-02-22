import { TradeGetExpiringTradesInfoForCustomer$Params } from '../../../swagger/fn/trade/trade-get-expiring-trades-info-for-customer';
import { TradesFilterObjectForCustomerAlt } from '../../models/trades-filter-object-for-customer-alt.interface';
import { apiTradesFilterObjectForCustomerAltDtoAdapter } from '../../adapters/models/api-trades-filter-object-for-customer.adapter';

// @ts-ignore
export interface TradeGetExpiringTradesInfoForCustomerParams {
  body?: TradesFilterObjectForCustomerAlt;
}

export function tradeGetExpiringTradesInfoForCustomerAdapter(params?: TradeGetExpiringTradesInfoForCustomerParams): TradeGetExpiringTradesInfoForCustomer$Params {
  if (!params) {
    return {} as TradeGetExpiringTradesInfoForCustomer$Params;
  }
  return {
      body: apiTradesFilterObjectForCustomerAltDtoAdapter(params.body),
  };
}
