import { TradesGetTradeCharacteristics$Params } from '../../../swagger/fn/trades/trades-get-trade-characteristics';

export interface TradesGetTradeCharacteristicsParams {
  id: number;
}

export const tradesGetTradeCharacteristicsParamsAdapter = {
  adapt(params?: TradesGetTradeCharacteristicsParams): TradesGetTradeCharacteristics$Params {
    if (!params) {
      return {} as TradesGetTradeCharacteristics$Params;
    }
    return {
      id: params.id,
    };
  }
};
