import { BidNewGetBids$Params } from '../../../swagger/fn/bid-new/bid-new-get-bids';

export interface BidNewGetBidsParams {
  tradeGuid: string;
  pageNumber: number;
  pageSize: number;
}

export const bidNewGetBidsParamsAdapter = {
  adapt(params?: BidNewGetBidsParams): BidNewGetBids$Params {
    if (!params) {
      return {} as BidNewGetBids$Params;
    }
    return {
      tradeGuid: params.tradeGuid,
      pageNumber: params.pageNumber,
      pageSize: params.pageSize,
    };
  }
};
