import { CompetetiveListGetCompetetiveListItemsByTradeId$Params } from '../../../swagger/fn/competetive-list/competetive-list-get-competetive-list-items-by-trade-id';

// @ts-ignore
export interface CompetetiveListGetCompetetiveListItemsByTradeIdParams {
  tradeId: number;
}

export function competetiveListGetCompetetiveListItemsByTradeIdAdapter(params?: CompetetiveListGetCompetetiveListItemsByTradeIdParams): CompetetiveListGetCompetetiveListItemsByTradeId$Params {
  if (!params) {
    return {} as CompetetiveListGetCompetetiveListItemsByTradeId$Params;
  }
  return {
      tradeId: params.tradeId,
  };
}
