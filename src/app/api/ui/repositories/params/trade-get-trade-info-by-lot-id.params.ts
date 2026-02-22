import { TradeGetTradeInfoByLotId$Params } from '../../../swagger/fn/trade/trade-get-trade-info-by-lot-id';

// @ts-ignore
export interface TradeGetTradeInfoByLotIdParams {
  id: number;
}

export function tradeGetTradeInfoByLotIdAdapter(params?: TradeGetTradeInfoByLotIdParams): TradeGetTradeInfoByLotId$Params {
  if (!params) {
    return {} as TradeGetTradeInfoByLotId$Params;
  }
  return {
      id: params.id,
  };
}
