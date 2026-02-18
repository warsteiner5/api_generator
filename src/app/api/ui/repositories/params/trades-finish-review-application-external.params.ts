import { FinishReviewApplication } from '../../models/finish-review-application.interface';
import { TradesFinishReviewApplicationExternal$Params } from '../../../swagger/fn/trades/trades-finish-review-application-external';
import { adaptApiFinishReviewApplicationDto } from '../../adapters/toDto/api-finish-review-application-dto.adapter';

export interface TradesFinishReviewApplicationExternalParams {
  id: number;
  body?: FinishReviewApplication;
}

export const tradesFinishReviewApplicationExternalParamsAdapter = {
  adapt(params?: TradesFinishReviewApplicationExternalParams): TradesFinishReviewApplicationExternal$Params {
    if (!params) {
      return {} as TradesFinishReviewApplicationExternal$Params;
    }
    return {
      id: params.id,
      body: adaptApiFinishReviewApplicationDto(params.body),
    };
  }
};
