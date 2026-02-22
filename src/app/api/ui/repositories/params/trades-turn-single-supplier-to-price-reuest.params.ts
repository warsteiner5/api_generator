import { TradesTurnSingleSupplierToPriceReuest$Params } from '../../../swagger/fn/trades/trades-turn-single-supplier-to-price-reuest';

// @ts-ignore
export interface TradesTurnSingleSupplierToPriceReuestParams {
  tradeId: number;
}

export function tradesTurnSingleSupplierToPriceReuestAdapter(params?: TradesTurnSingleSupplierToPriceReuestParams): TradesTurnSingleSupplierToPriceReuest$Params {
  if (!params) {
    return {} as TradesTurnSingleSupplierToPriceReuest$Params;
  }
  return {
      tradeId: params.tradeId,
  };
}
