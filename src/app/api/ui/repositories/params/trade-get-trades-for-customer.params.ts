import { TradeGetTradesForCustomer$Params } from '../../../swagger/fn/trade/trade-get-trades-for-customer';
import { TradesFilterObjectForCustomerAlt } from '../../models/trades-filter-object-for-customer-alt.interface';
import { adaptApiTradesFilterObjectForCustomerAltDto } from '../../adapters/toDto/api-trades-filter-object-for-customer.adapter';

export interface TradeGetTradesForCustomerParams {
  body?: TradesFilterObjectForCustomerAlt;
}

export const tradeGetTradesForCustomerParamsAdapter = {
  adapt(params?: TradeGetTradesForCustomerParams): TradeGetTradesForCustomer$Params {
    if (!params) {
      return {} as TradeGetTradesForCustomer$Params;
    }
    return {
      body: adaptApiTradesFilterObjectForCustomerAltDto(params.body),
    };
  }
};
