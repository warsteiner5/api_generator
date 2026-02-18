import { BiddingDataGetInfo$Params } from '../../../swagger/fn/bidding-data/bidding-data-get-info';

export interface BiddingDataGetInfoParams {
  tradeId: number;
}

export const biddingDataGetInfoParamsAdapter = {
  adapt(params?: BiddingDataGetInfoParams): BiddingDataGetInfo$Params {
    if (!params) {
      return {} as BiddingDataGetInfo$Params;
    }
    return {
      tradeId: params.tradeId,
    };
  }
};
