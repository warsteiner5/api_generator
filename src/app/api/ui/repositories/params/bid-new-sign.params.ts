import { BidNewSign$Params } from '../../../swagger/fn/bid-new/bid-new-sign';
import { SignBidRequestNewAlt } from '../../models/sign-bid-request-new-alt.interface';
import { adaptApiSignBidRequestNewAltDto } from '../../adapters/toDto/api-sign-bid-request-new.adapter';

export interface BidNewSignParams {
  body?: SignBidRequestNewAlt;
}

export const bidNewSignParamsAdapter = {
  adapt(params?: BidNewSignParams): BidNewSign$Params {
    if (!params) {
      return {} as BidNewSign$Params;
    }
    return {
      body: adaptApiSignBidRequestNewAltDto(params.body),
    };
  }
};
