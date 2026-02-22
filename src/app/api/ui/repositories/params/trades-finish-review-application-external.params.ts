import { FinishReviewApplication } from '../../models/finish-review-application.interface';
import { TradesFinishReviewApplicationExternal$Params } from '../../../swagger/fn/trades/trades-finish-review-application-external';
import { apiFinishReviewApplicationDtoAdapter } from '../../adapters/models/api-finish-review-application-dto.adapter';

// @ts-ignore
export interface TradesFinishReviewApplicationExternalParams {
  id: number;
  body?: FinishReviewApplication;
}

export function tradesFinishReviewApplicationExternalAdapter(params?: TradesFinishReviewApplicationExternalParams): TradesFinishReviewApplicationExternal$Params {
  if (!params) {
    return {} as TradesFinishReviewApplicationExternal$Params;
  }
  return {
      id: params.id,
      body: apiFinishReviewApplicationDtoAdapter(params.body),
  };
}
