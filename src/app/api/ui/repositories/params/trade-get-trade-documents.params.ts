import { TradeGetTradeDocuments$Params } from '../../../swagger/fn/trade/trade-get-trade-documents';

// @ts-ignore
export interface TradeGetTradeDocumentsParams {
  tradeId: number;
}

export function tradeGetTradeDocumentsAdapter(params?: TradeGetTradeDocumentsParams): TradeGetTradeDocuments$Params {
  if (!params) {
    return {} as TradeGetTradeDocuments$Params;
  }
  return {
      tradeId: params.tradeId,
  };
}
