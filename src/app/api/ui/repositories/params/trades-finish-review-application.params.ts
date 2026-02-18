import { FinishReviewApplication } from '../../models/finish-review-application.interface';
import { TradesFinishReviewApplication$Params } from '../../../swagger/fn/trades/trades-finish-review-application';
import { adaptApiFinishReviewApplicationDto } from '../../adapters/toDto/api-finish-review-application-dto.adapter';

export interface TradesFinishReviewApplicationParams {
  id: number;
  body?: FinishReviewApplication;
}

export const tradesFinishReviewApplicationParamsAdapter = {
  adapt(params?: TradesFinishReviewApplicationParams): TradesFinishReviewApplication$Params {
    if (!params) {
      return {} as TradesFinishReviewApplication$Params;
    }
    return {
      id: params.id,
      body: adaptApiFinishReviewApplicationDto(params.body),
    };
  }
};
