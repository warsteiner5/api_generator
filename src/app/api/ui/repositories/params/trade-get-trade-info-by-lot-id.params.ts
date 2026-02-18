import { TradeGetTradeInfoByLotId$Params } from '../../../swagger/fn/trade/trade-get-trade-info-by-lot-id';

export interface TradeGetTradeInfoByLotIdParams {
  id: number;
}

export const tradeGetTradeInfoByLotIdParamsAdapter = {
  adapt(params?: TradeGetTradeInfoByLotIdParams): TradeGetTradeInfoByLotId$Params {
    if (!params) {
      return {} as TradeGetTradeInfoByLotId$Params;
    }
    return {
      id: params.id,
    };
  }
};
