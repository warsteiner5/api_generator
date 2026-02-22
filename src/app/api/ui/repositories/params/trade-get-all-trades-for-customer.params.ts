import { AllTradesFilterObjectForCustomerAlt } from '../../models/all-trades-filter-object-for-customer-alt.interface';
import { TradeGetAllTradesForCustomer$Params } from '../../../swagger/fn/trade/trade-get-all-trades-for-customer';
import { apiAllTradesFilterObjectForCustomerAltDtoAdapter } from '../../adapters/models/api-all-trades-filter-object-for-customer.adapter';

// @ts-ignore
export interface TradeGetAllTradesForCustomerParams {
  body?: AllTradesFilterObjectForCustomerAlt;
}

export function tradeGetAllTradesForCustomerAdapter(params?: TradeGetAllTradesForCustomerParams): TradeGetAllTradesForCustomer$Params {
  if (!params) {
    return {} as TradeGetAllTradesForCustomer$Params;
  }
  return {
      body: apiAllTradesFilterObjectForCustomerAltDtoAdapter(params.body),
  };
}
