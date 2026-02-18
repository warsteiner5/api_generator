import { TradeGetTradeShortInfoById$Params } from '../../../swagger/fn/trade/trade-get-trade-short-info-by-id';

export interface TradeGetTradeShortInfoByIdParams {
  id: number;
}

export const tradeGetTradeShortInfoByIdParamsAdapter = {
  adapt(params?: TradeGetTradeShortInfoByIdParams): TradeGetTradeShortInfoById$Params {
    if (!params) {
      return {} as TradeGetTradeShortInfoById$Params;
    }
    return {
      id: params.id,
    };
  }
};
