/* tslint:disable */
/* eslint-disable */
import { ApiBiddingStatusAltEnum } from '../models/api-bidding-status';
export interface ApiBiddingInfoAltDto {
  BestBid?: number | null;
  EndDate?: string;
  MaxAvailableBidValue?: number;
  MinAvailableBidValue?: number;
  ParticipantsCount?: number;
  ReductionPrice?: number;
  StartPrice?: number;
  Status?: ApiBiddingStatusAltEnum;
  YourBestBid?: number | null;
  YourRank?: number | null;
}
