import { FinishReviewApplication } from '../../models/finish-review-application.interface';
import { TradeGetFinishReviewApplicationProtocolDefault$Params } from '../../../swagger/fn/trade/trade-get-finish-review-application-protocol-default';
import { adaptApiFinishReviewApplicationDto } from '../../adapters/toDto/api-finish-review-application-dto.adapter';

export interface TradeGetFinishReviewApplicationProtocolDefaultParams {
  body?: FinishReviewApplication;
}

export const tradeGetFinishReviewApplicationProtocolDefaultParamsAdapter = {
  adapt(params?: TradeGetFinishReviewApplicationProtocolDefaultParams): TradeGetFinishReviewApplicationProtocolDefault$Params {
    if (!params) {
      return {} as TradeGetFinishReviewApplicationProtocolDefault$Params;
    }
    return {
      body: adaptApiFinishReviewApplicationDto(params.body),
    };
  }
};
