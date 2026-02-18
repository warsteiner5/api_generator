import { BidGetBids$Params } from '../../../swagger/fn/bid/bid-get-bids';

export interface BidGetBidsParams {
  tradeId: number;
  pageNumber: number;
  pageSize: number;
}

export const bidGetBidsParamsAdapter = {
  adapt(params?: BidGetBidsParams): BidGetBids$Params {
    if (!params) {
      return {} as BidGetBids$Params;
    }
    return {
      tradeId: params.tradeId,
      pageNumber: params.pageNumber,
      pageSize: params.pageSize,
    };
  }
};
