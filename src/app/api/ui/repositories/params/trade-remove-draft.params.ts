import { TradeRemoveDraft$Params } from '../../../swagger/fn/trade/trade-remove-draft';

export interface TradeRemoveDraftParams {
  id: number;
}

export const tradeRemoveDraftParamsAdapter = {
  adapt(params?: TradeRemoveDraftParams): TradeRemoveDraft$Params {
    if (!params) {
      return {} as TradeRemoveDraft$Params;
    }
    return {
      id: params.id,
    };
  }
};
