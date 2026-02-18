import { TradesTurnSingleSupplierToPriceReuest$Params } from '../../../swagger/fn/trades/trades-turn-single-supplier-to-price-reuest';

export interface TradesTurnSingleSupplierToPriceReuestParams {
  tradeId: number;
}

export const tradesTurnSingleSupplierToPriceReuestParamsAdapter = {
  adapt(params?: TradesTurnSingleSupplierToPriceReuestParams): TradesTurnSingleSupplierToPriceReuest$Params {
    if (!params) {
      return {} as TradesTurnSingleSupplierToPriceReuest$Params;
    }
    return {
      tradeId: params.tradeId,
    };
  }
};
