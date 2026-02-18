import { TradeGetCustomerContactInfo$Params } from '../../../swagger/fn/trade/trade-get-customer-contact-info';

export interface TradeGetCustomerContactInfoParams {
}

export const tradeGetCustomerContactInfoParamsAdapter = {
  adapt(params?: TradeGetCustomerContactInfoParams): TradeGetCustomerContactInfo$Params {
    if (!params) {
      return {} as TradeGetCustomerContactInfo$Params;
    }
    return {
    };
  }
};
