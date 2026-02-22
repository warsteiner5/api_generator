import { FinishReviewApplication } from '../../models/finish-review-application.interface';
import { TradesFinishReviewApplication$Params } from '../../../swagger/fn/trades/trades-finish-review-application';
import { apiFinishReviewApplicationDtoAdapter } from '../../adapters/models/api-finish-review-application-dto.adapter';

// @ts-ignore
export interface TradesFinishReviewApplicationParams {
  id: number;
  body?: FinishReviewApplication;
}

export function tradesFinishReviewApplicationAdapter(params?: TradesFinishReviewApplicationParams): TradesFinishReviewApplication$Params {
  if (!params) {
    return {} as TradesFinishReviewApplication$Params;
  }
  return {
      id: params.id,
      body: apiFinishReviewApplicationDtoAdapter(params.body),
  };
}
