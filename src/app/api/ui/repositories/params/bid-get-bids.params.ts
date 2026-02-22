import { BidGetBids$Params } from '../../../swagger/fn/bid/bid-get-bids';

// @ts-ignore
export interface BidGetBidsParams {
  tradeId: number;
  pageNumber: number;
  pageSize: number;
}

export function bidGetBidsAdapter(params?: BidGetBidsParams): BidGetBids$Params {
  if (!params) {
    return {} as BidGetBids$Params;
  }
  return {
      tradeId: params.tradeId,
      pageNumber: params.pageNumber,
      pageSize: params.pageSize,
  };
}
