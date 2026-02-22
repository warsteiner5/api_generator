import { BiddingGetInfo$Params } from '../../../swagger/fn/bidding/bidding-get-info';

// @ts-ignore
export interface BiddingGetInfoParams {
  tradeId: number;
}

export function biddingGetInfoAdapter(params?: BiddingGetInfoParams): BiddingGetInfo$Params {
  if (!params) {
    return {} as BiddingGetInfo$Params;
  }
  return {
      tradeId: params.tradeId,
  };
}
