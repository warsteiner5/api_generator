import { TradeGetTradeCopy$Params } from '../../../swagger/fn/trade/trade-get-trade-copy';

export interface TradeGetTradeCopyParams {
  id: number;
}

export const tradeGetTradeCopyParamsAdapter = {
  adapt(params?: TradeGetTradeCopyParams): TradeGetTradeCopy$Params {
    if (!params) {
      return {} as TradeGetTradeCopy$Params;
    }
    return {
      id: params.id,
    };
  }
};
