import { TradesGetCharacteristicsByTradeIdAsFile$Params } from '../../../swagger/fn/trades/trades-get-characteristics-by-trade-id-as-file';

export interface TradesGetCharacteristicsByTradeIdAsFileParams {
  id: number;
}

export const tradesGetCharacteristicsByTradeIdAsFileParamsAdapter = {
  adapt(params?: TradesGetCharacteristicsByTradeIdAsFileParams): TradesGetCharacteristicsByTradeIdAsFile$Params {
    if (!params) {
      return {} as TradesGetCharacteristicsByTradeIdAsFile$Params;
    }
    return {
      id: params.id,
    };
  }
};
