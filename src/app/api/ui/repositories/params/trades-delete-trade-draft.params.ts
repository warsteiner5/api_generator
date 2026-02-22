import { TradesDeleteTradeDraft$Params } from '../../../swagger/fn/trades/trades-delete-trade-draft';

// @ts-ignore
export interface TradesDeleteTradeDraftParams {
  id: number;
}

export function tradesDeleteTradeDraftAdapter(params?: TradesDeleteTradeDraftParams): TradesDeleteTradeDraft$Params {
  if (!params) {
    return {} as TradesDeleteTradeDraft$Params;
  }
  return {
      id: params.id,
  };
}
