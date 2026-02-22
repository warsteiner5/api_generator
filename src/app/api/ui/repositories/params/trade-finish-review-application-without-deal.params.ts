import { FinishReviewApplication } from '../../models/finish-review-application.interface';
import { TradeFinishReviewApplicationWithoutDeal$Params } from '../../../swagger/fn/trade/trade-finish-review-application-without-deal';
import { apiFinishReviewApplicationDtoAdapter } from '../../adapters/models/api-finish-review-application-dto.adapter';

// @ts-ignore
export interface TradeFinishReviewApplicationWithoutDealParams {
  body?: FinishReviewApplication;
}

export function tradeFinishReviewApplicationWithoutDealAdapter(params?: TradeFinishReviewApplicationWithoutDealParams): TradeFinishReviewApplicationWithoutDeal$Params {
  if (!params) {
    return {} as TradeFinishReviewApplicationWithoutDeal$Params;
  }
  return {
      body: apiFinishReviewApplicationDtoAdapter(params.body),
  };
}
