import { TradeGetExpiringTradesInfoForCustomer$Params } from '../../../swagger/fn/trade/trade-get-expiring-trades-info-for-customer';
import { TradesFilterObjectForCustomerAlt } from '../../models/trades-filter-object-for-customer-alt.interface';
import { adaptApiTradesFilterObjectForCustomerAltDto } from '../../adapters/toDto/api-trades-filter-object-for-customer.adapter';

export interface TradeGetExpiringTradesInfoForCustomerParams {
  body?: TradesFilterObjectForCustomerAlt;
}

export const tradeGetExpiringTradesInfoForCustomerParamsAdapter = {
  adapt(params?: TradeGetExpiringTradesInfoForCustomerParams): TradeGetExpiringTradesInfoForCustomer$Params {
    if (!params) {
      return {} as TradeGetExpiringTradesInfoForCustomer$Params;
    }
    return {
      body: adaptApiTradesFilterObjectForCustomerAltDto(params.body),
    };
  }
};
