import { BiddingNewGetInfo$Params } from '../../../swagger/fn/bidding-new/bidding-new-get-info';

// @ts-ignore
export interface BiddingNewGetInfoParams {
  tradeGuid: string;
}

export function biddingNewGetInfoAdapter(params?: BiddingNewGetInfoParams): BiddingNewGetInfo$Params {
  if (!params) {
    return {} as BiddingNewGetInfo$Params;
  }
  return {
      tradeGuid: params.tradeGuid,
  };
}
