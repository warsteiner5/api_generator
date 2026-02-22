import { BidNewGetBids$Params } from '../../../swagger/fn/bid-new/bid-new-get-bids';

// @ts-ignore
export interface BidNewGetBidsParams {
  tradeGuid: string;
  pageNumber: number;
  pageSize: number;
}

export function bidNewGetBidsAdapter(params?: BidNewGetBidsParams): BidNewGetBids$Params {
  if (!params) {
    return {} as BidNewGetBids$Params;
  }
  return {
      tradeGuid: params.tradeGuid,
      pageNumber: params.pageNumber,
      pageSize: params.pageSize,
  };
}
