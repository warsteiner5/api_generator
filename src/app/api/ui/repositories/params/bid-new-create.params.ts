import { BidNewCreate$Params } from '../../../swagger/fn/bid-new/bid-new-create';
import { CreateBidRequestNewAlt } from '../../models/create-bid-request-new-alt.interface';
import { adaptApiCreateBidRequestNewAltDto } from '../../adapters/toDto/api-create-bid-request-new.adapter';

export interface BidNewCreateParams {
  body?: CreateBidRequestNewAlt;
}

export const bidNewCreateParamsAdapter = {
  adapt(params?: BidNewCreateParams): BidNewCreate$Params {
    if (!params) {
      return {} as BidNewCreate$Params;
    }
    return {
      body: adaptApiCreateBidRequestNewAltDto(params.body),
    };
  }
};
