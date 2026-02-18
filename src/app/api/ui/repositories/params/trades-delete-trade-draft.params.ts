import { TradesDeleteTradeDraft$Params } from '../../../swagger/fn/trades/trades-delete-trade-draft';

export interface TradesDeleteTradeDraftParams {
  id: number;
}

export const tradesDeleteTradeDraftParamsAdapter = {
  adapt(params?: TradesDeleteTradeDraftParams): TradesDeleteTradeDraft$Params {
    if (!params) {
      return {} as TradesDeleteTradeDraft$Params;
    }
    return {
      id: params.id,
    };
  }
};
