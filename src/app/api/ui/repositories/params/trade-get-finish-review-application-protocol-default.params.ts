import { FinishReviewApplication } from '../../models/finish-review-application.interface';
import { TradeGetFinishReviewApplicationProtocolDefault$Params } from '../../../swagger/fn/trade/trade-get-finish-review-application-protocol-default';
import { apiFinishReviewApplicationDtoAdapter } from '../../adapters/models/api-finish-review-application-dto.adapter';

// @ts-ignore
export interface TradeGetFinishReviewApplicationProtocolDefaultParams {
  body?: FinishReviewApplication;
}

export function tradeGetFinishReviewApplicationProtocolDefaultAdapter(params?: TradeGetFinishReviewApplicationProtocolDefaultParams): TradeGetFinishReviewApplicationProtocolDefault$Params {
  if (!params) {
    return {} as TradeGetFinishReviewApplicationProtocolDefault$Params;
  }
  return {
      body: apiFinishReviewApplicationDtoAdapter(params.body),
  };
}
