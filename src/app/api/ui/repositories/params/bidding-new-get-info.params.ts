import { BiddingNewGetInfo$Params } from '../../../swagger/fn/bidding-new/bidding-new-get-info';

export interface BiddingNewGetInfoParams {
  tradeGuid: string;
}

export const biddingNewGetInfoParamsAdapter = {
  adapt(params?: BiddingNewGetInfoParams): BiddingNewGetInfo$Params {
    if (!params) {
      return {} as BiddingNewGetInfo$Params;
    }
    return {
      tradeGuid: params.tradeGuid,
    };
  }
};
