import { BidSign$Params } from '../../../swagger/fn/bid/bid-sign';
import { SignBidRequestAlt } from '../../models/sign-bid-request-alt.interface';
import { apiSignBidRequestAltDtoAdapter } from '../../adapters/models/api-sign-bid-request.adapter';

// @ts-ignore
export interface BidSignParams {
  body?: SignBidRequestAlt;
}

export function bidSignAdapter(params?: BidSignParams): BidSign$Params {
  if (!params) {
    return {} as BidSign$Params;
  }
  return {
      body: apiSignBidRequestAltDtoAdapter(params.body),
  };
}
