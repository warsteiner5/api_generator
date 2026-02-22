import { TradesGetCharacteristicsByTradeIdAsFile$Params } from '../../../swagger/fn/trades/trades-get-characteristics-by-trade-id-as-file';

// @ts-ignore
export interface TradesGetCharacteristicsByTradeIdAsFileParams {
  id: number;
}

export function tradesGetCharacteristicsByTradeIdAsFileAdapter(params?: TradesGetCharacteristicsByTradeIdAsFileParams): TradesGetCharacteristicsByTradeIdAsFile$Params {
  if (!params) {
    return {} as TradesGetCharacteristicsByTradeIdAsFile$Params;
  }
  return {
      id: params.id,
  };
}
