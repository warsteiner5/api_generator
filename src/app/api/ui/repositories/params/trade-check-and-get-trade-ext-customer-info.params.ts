import { TradeCheckAndGetTradeExtCustomerInfo$Params } from '../../../swagger/fn/trade/trade-check-and-get-trade-ext-customer-info';

// @ts-ignore
export interface TradeCheckAndGetTradeExtCustomerInfoParams {
  fileGuid: string;
}

export function tradeCheckAndGetTradeExtCustomerInfoAdapter(params?: TradeCheckAndGetTradeExtCustomerInfoParams): TradeCheckAndGetTradeExtCustomerInfo$Params {
  if (!params) {
    return {} as TradeCheckAndGetTradeExtCustomerInfo$Params;
  }
  return {
      fileGuid: params.fileGuid,
  };
}
