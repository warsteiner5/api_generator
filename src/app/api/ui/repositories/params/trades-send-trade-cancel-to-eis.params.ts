import { TradesSendTradeCancelToEis$Params } from '../../../swagger/fn/trades/trades-send-trade-cancel-to-eis';

export interface TradesSendTradeCancelToEisParams {
  tradeId: number;
}

export const tradesSendTradeCancelToEisParamsAdapter = {
  adapt(params?: TradesSendTradeCancelToEisParams): TradesSendTradeCancelToEis$Params {
    if (!params) {
      return {} as TradesSendTradeCancelToEis$Params;
    }
    return {
      tradeId: params.tradeId,
    };
  }
};
