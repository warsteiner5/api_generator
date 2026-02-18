import { BidSign$Params } from '../../../swagger/fn/bid/bid-sign';
import { SignBidRequestAlt } from '../../models/sign-bid-request-alt.interface';
import { adaptApiSignBidRequestAltDto } from '../../adapters/toDto/api-sign-bid-request.adapter';

export interface BidSignParams {
  body?: SignBidRequestAlt;
}

export const bidSignParamsAdapter = {
  adapt(params?: BidSignParams): BidSign$Params {
    if (!params) {
      return {} as BidSign$Params;
    }
    return {
      body: adaptApiSignBidRequestAltDto(params.body),
    };
  }
};
