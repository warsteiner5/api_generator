import { BiddingStatusAltEnum } from '../enums/bidding-status-alt.enum';

// @ts-ignore
export interface BiddingInfoAlt {
  bestBid: number;
  endDate: string;
  maxAvailableBidValue: number;
  minAvailableBidValue: number;
  participantsCount: number;
  reductionPrice: number;
  startPrice: number;
  status: BiddingStatusAltEnum;
  yourBestBid: number;
  yourRank: number;
}
