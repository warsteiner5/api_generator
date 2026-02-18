import { AllTradesFilterObjectForCustomerAlt } from '../../models/all-trades-filter-object-for-customer-alt.interface';
import { TradeGetAllTradesForCustomer$Params } from '../../../swagger/fn/trade/trade-get-all-trades-for-customer';
import { adaptApiAllTradesFilterObjectForCustomerAltDto } from '../../adapters/toDto/api-all-trades-filter-object-for-customer.adapter';

export interface TradeGetAllTradesForCustomerParams {
  body?: AllTradesFilterObjectForCustomerAlt;
}

export const tradeGetAllTradesForCustomerParamsAdapter = {
  adapt(params?: TradeGetAllTradesForCustomerParams): TradeGetAllTradesForCustomer$Params {
    if (!params) {
      return {} as TradeGetAllTradesForCustomer$Params;
    }
    return {
      body: adaptApiAllTradesFilterObjectForCustomerAltDto(params.body),
    };
  }
};
