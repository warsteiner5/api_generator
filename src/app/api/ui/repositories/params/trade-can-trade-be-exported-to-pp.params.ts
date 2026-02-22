import { TradeCanTradeBeExportedToPp$Params } from '../../../swagger/fn/trade/trade-can-trade-be-exported-to-pp';

// @ts-ignore
export interface TradeCanTradeBeExportedToPpParams {
  tradeId: number;
}

export function tradeCanTradeBeExportedToPpAdapter(params?: TradeCanTradeBeExportedToPpParams): TradeCanTradeBeExportedToPp$Params {
  if (!params) {
    return {} as TradeCanTradeBeExportedToPp$Params;
  }
  return {
      tradeId: params.tradeId,
  };
}
