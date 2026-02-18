import { TradeCheckAndGetTradeExtCustomerInfo$Params } from '../../../swagger/fn/trade/trade-check-and-get-trade-ext-customer-info';

export interface TradeCheckAndGetTradeExtCustomerInfoParams {
  fileGuid: string;
}

export const tradeCheckAndGetTradeExtCustomerInfoParamsAdapter = {
  adapt(params?: TradeCheckAndGetTradeExtCustomerInfoParams): TradeCheckAndGetTradeExtCustomerInfo$Params {
    if (!params) {
      return {} as TradeCheckAndGetTradeExtCustomerInfo$Params;
    }
    return {
      fileGuid: params.fileGuid,
    };
  }
};
