import { FinishReviewApplication } from '../../models/finish-review-application.interface';
import { TradeFinishReviewApplicationWithoutDeal$Params } from '../../../swagger/fn/trade/trade-finish-review-application-without-deal';
import { adaptApiFinishReviewApplicationDto } from '../../adapters/toDto/api-finish-review-application-dto.adapter';

export interface TradeFinishReviewApplicationWithoutDealParams {
  body?: FinishReviewApplication;
}

export const tradeFinishReviewApplicationWithoutDealParamsAdapter = {
  adapt(params?: TradeFinishReviewApplicationWithoutDealParams): TradeFinishReviewApplicationWithoutDeal$Params {
    if (!params) {
      return {} as TradeFinishReviewApplicationWithoutDeal$Params;
    }
    return {
      body: adaptApiFinishReviewApplicationDto(params.body),
    };
  }
};
