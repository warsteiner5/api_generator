import { BidNewCreate$Params } from '../../../swagger/fn/bid-new/bid-new-create';
import { CreateBidRequestNewAlt } from '../../models/create-bid-request-new-alt.interface';
import { apiCreateBidRequestNewAltDtoAdapter } from '../../adapters/models/api-create-bid-request-new.adapter';

// @ts-ignore
export interface BidNewCreateParams {
  body?: CreateBidRequestNewAlt;
}

export function bidNewCreateAdapter(params?: BidNewCreateParams): BidNewCreate$Params {
  if (!params) {
    return {} as BidNewCreate$Params;
  }
  return {
      body: apiCreateBidRequestNewAltDtoAdapter(params.body),
  };
}
