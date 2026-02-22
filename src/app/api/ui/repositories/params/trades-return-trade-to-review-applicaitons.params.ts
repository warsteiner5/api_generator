import { TradesReturnTradeToReviewApplicaitons$Params } from '../../../swagger/fn/trades/trades-return-trade-to-review-applicaitons';

// @ts-ignore
export interface TradesReturnTradeToReviewApplicaitonsParams {
  tradeId: number;
}

export function tradesReturnTradeToReviewApplicaitonsAdapter(params?: TradesReturnTradeToReviewApplicaitonsParams): TradesReturnTradeToReviewApplicaitons$Params {
  if (!params) {
    return {} as TradesReturnTradeToReviewApplicaitons$Params;
  }
  return {
      tradeId: params.tradeId,
  };
}
