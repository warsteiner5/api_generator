import { CompetetiveListGetCompetetiveListItemsByTradeId$Params } from '../../../swagger/fn/competetive-list/competetive-list-get-competetive-list-items-by-trade-id';

export interface CompetetiveListGetCompetetiveListItemsByTradeIdParams {
  tradeId: number;
}

export const competetiveListGetCompetetiveListItemsByTradeIdParamsAdapter = {
  adapt(params?: CompetetiveListGetCompetetiveListItemsByTradeIdParams): CompetetiveListGetCompetetiveListItemsByTradeId$Params {
    if (!params) {
      return {} as CompetetiveListGetCompetetiveListItemsByTradeId$Params;
    }
    return {
      tradeId: params.tradeId,
    };
  }
};
