import { TradeCanTradeBeExportedToPp$Params } from '../../../swagger/fn/trade/trade-can-trade-be-exported-to-pp';

export interface TradeCanTradeBeExportedToPpParams {
  tradeId: number;
}

export const tradeCanTradeBeExportedToPpParamsAdapter = {
  adapt(params?: TradeCanTradeBeExportedToPpParams): TradeCanTradeBeExportedToPp$Params {
    if (!params) {
      return {} as TradeCanTradeBeExportedToPp$Params;
    }
    return {
      tradeId: params.tradeId,
    };
  }
};
