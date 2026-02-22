import { TradesGetTradeCharacteristics$Params } from '../../../swagger/fn/trades/trades-get-trade-characteristics';

// @ts-ignore
export interface TradesGetTradeCharacteristicsParams {
  id: number;
}

export function tradesGetTradeCharacteristicsAdapter(params?: TradesGetTradeCharacteristicsParams): TradesGetTradeCharacteristics$Params {
  if (!params) {
    return {} as TradesGetTradeCharacteristics$Params;
  }
  return {
      id: params.id,
  };
}
