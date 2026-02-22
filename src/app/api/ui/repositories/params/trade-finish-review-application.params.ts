import { FinishReviewApplication } from '../../models/finish-review-application.interface';
import { TradeFinishReviewApplication$Params } from '../../../swagger/fn/trade/trade-finish-review-application';
import { apiFinishReviewApplicationDtoAdapter } from '../../adapters/models/api-finish-review-application-dto.adapter';

// @ts-ignore
export interface TradeFinishReviewApplicationParams {
  body?: FinishReviewApplication;
}

export function tradeFinishReviewApplicationAdapter(params?: TradeFinishReviewApplicationParams): TradeFinishReviewApplication$Params {
  if (!params) {
    return {} as TradeFinishReviewApplication$Params;
  }
  return {
      body: apiFinishReviewApplicationDtoAdapter(params.body),
  };
}
