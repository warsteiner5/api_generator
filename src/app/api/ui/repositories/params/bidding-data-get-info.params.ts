import { BiddingDataGetInfo$Params } from '../../../swagger/fn/bidding-data/bidding-data-get-info';

// @ts-ignore
export interface BiddingDataGetInfoParams {
  tradeId: number;
}

export function biddingDataGetInfoAdapter(params?: BiddingDataGetInfoParams): BiddingDataGetInfo$Params {
  if (!params) {
    return {} as BiddingDataGetInfo$Params;
  }
  return {
      tradeId: params.tradeId,
  };
}
