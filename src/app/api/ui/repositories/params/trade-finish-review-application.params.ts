import { FinishReviewApplication } from '../../models/finish-review-application.interface';
import { TradeFinishReviewApplication$Params } from '../../../swagger/fn/trade/trade-finish-review-application';
import { adaptApiFinishReviewApplicationDto } from '../../adapters/toDto/api-finish-review-application-dto.adapter';

export interface TradeFinishReviewApplicationParams {
  body?: FinishReviewApplication;
}

export const tradeFinishReviewApplicationParamsAdapter = {
  adapt(params?: TradeFinishReviewApplicationParams): TradeFinishReviewApplication$Params {
    if (!params) {
      return {} as TradeFinishReviewApplication$Params;
    }
    return {
      body: adaptApiFinishReviewApplicationDto(params.body),
    };
  }
};
