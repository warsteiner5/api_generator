import { BidNewSign$Params } from '../../../swagger/fn/bid-new/bid-new-sign';
import { SignBidRequestNewAlt } from '../../models/sign-bid-request-new-alt.interface';
import { apiSignBidRequestNewAltDtoAdapter } from '../../adapters/models/api-sign-bid-request-new.adapter';

// @ts-ignore
export interface BidNewSignParams {
  body?: SignBidRequestNewAlt;
}

export function bidNewSignAdapter(params?: BidNewSignParams): BidNewSign$Params {
  if (!params) {
    return {} as BidNewSign$Params;
  }
  return {
      body: apiSignBidRequestNewAltDtoAdapter(params.body),
  };
}
