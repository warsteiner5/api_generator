import { BiddingGetInfo$Params } from '../../../swagger/fn/bidding/bidding-get-info';

export interface BiddingGetInfoParams {
  tradeId: number;
}

export const biddingGetInfoParamsAdapter = {
  adapt(params?: BiddingGetInfoParams): BiddingGetInfo$Params {
    if (!params) {
      return {} as BiddingGetInfo$Params;
    }
    return {
      tradeId: params.tradeId,
    };
  }
};
