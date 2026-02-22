import { TradesSendTradeCancelToEis$Params } from '../../../swagger/fn/trades/trades-send-trade-cancel-to-eis';

// @ts-ignore
export interface TradesSendTradeCancelToEisParams {
  tradeId: number;
}

export function tradesSendTradeCancelToEisAdapter(params?: TradesSendTradeCancelToEisParams): TradesSendTradeCancelToEis$Params {
  if (!params) {
    return {} as TradesSendTradeCancelToEis$Params;
  }
  return {
      tradeId: params.tradeId,
  };
}
