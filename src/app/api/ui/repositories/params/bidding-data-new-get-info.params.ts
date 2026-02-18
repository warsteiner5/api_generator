import { BiddingDataNewGetInfo$Params } from '../../../swagger/fn/bidding-data-new/bidding-data-new-get-info';

export interface BiddingDataNewGetInfoParams {
  tradeGuid: string;
}

export const biddingDataNewGetInfoParamsAdapter = {
  adapt(params?: BiddingDataNewGetInfoParams): BiddingDataNewGetInfo$Params {
    if (!params) {
      return {} as BiddingDataNewGetInfo$Params;
    }
    return {
      tradeGuid: params.tradeGuid,
    };
  }
};
