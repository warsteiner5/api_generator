import { BidCreate$Params } from '../../../swagger/fn/bid/bid-create';
import { CreateBidRequestAlt } from '../../models/create-bid-request-alt.interface';
import { adaptApiCreateBidRequestAltDto } from '../../adapters/toDto/api-create-bid-request.adapter';

export interface BidCreateParams {
  body?: CreateBidRequestAlt;
}

export const bidCreateParamsAdapter = {
  adapt(params?: BidCreateParams): BidCreate$Params {
    if (!params) {
      return {} as BidCreate$Params;
    }
    return {
      body: adaptApiCreateBidRequestAltDto(params.body),
    };
  }
};
