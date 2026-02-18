import { TradeGetTradeDocuments$Params } from '../../../swagger/fn/trade/trade-get-trade-documents';

export interface TradeGetTradeDocumentsParams {
  tradeId: number;
}

export const tradeGetTradeDocumentsParamsAdapter = {
  adapt(params?: TradeGetTradeDocumentsParams): TradeGetTradeDocuments$Params {
    if (!params) {
      return {} as TradeGetTradeDocuments$Params;
    }
    return {
      tradeId: params.tradeId,
    };
  }
};
