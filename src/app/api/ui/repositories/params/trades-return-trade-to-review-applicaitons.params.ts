import { TradesReturnTradeToReviewApplicaitons$Params } from '../../../swagger/fn/trades/trades-return-trade-to-review-applicaitons';

export interface TradesReturnTradeToReviewApplicaitonsParams {
  tradeId: number;
}

export const tradesReturnTradeToReviewApplicaitonsParamsAdapter = {
  adapt(params?: TradesReturnTradeToReviewApplicaitonsParams): TradesReturnTradeToReviewApplicaitons$Params {
    if (!params) {
      return {} as TradesReturnTradeToReviewApplicaitons$Params;
    }
    return {
      tradeId: params.tradeId,
    };
  }
};
