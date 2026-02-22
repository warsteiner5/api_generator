import { BidCreate$Params } from '../../../swagger/fn/bid/bid-create';
import { CreateBidRequestAlt } from '../../models/create-bid-request-alt.interface';
import { apiCreateBidRequestAltDtoAdapter } from '../../adapters/models/api-create-bid-request.adapter';

// @ts-ignore
export interface BidCreateParams {
  body?: CreateBidRequestAlt;
}

export function bidCreateAdapter(params?: BidCreateParams): BidCreate$Params {
  if (!params) {
    return {} as BidCreate$Params;
  }
  return {
      body: apiCreateBidRequestAltDtoAdapter(params.body),
  };
}
