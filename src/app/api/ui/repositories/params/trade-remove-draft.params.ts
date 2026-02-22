import { TradeRemoveDraft$Params } from '../../../swagger/fn/trade/trade-remove-draft';

// @ts-ignore
export interface TradeRemoveDraftParams {
  id: number;
}

export function tradeRemoveDraftAdapter(params?: TradeRemoveDraftParams): TradeRemoveDraft$Params {
  if (!params) {
    return {} as TradeRemoveDraft$Params;
  }
  return {
      id: params.id,
  };
}
