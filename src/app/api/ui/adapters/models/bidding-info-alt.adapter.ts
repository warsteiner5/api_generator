import { ApiBiddingInfoAltDto } from '../../../swagger/models/api-bidding-info';
import { BiddingInfoAlt } from '../../models/bidding-info-alt.interface';
import { biddingStatusAltEnumAdapter } from '../enums/bidding-status-alt-enum.adapter';

export const biddingInfoAltAdapter = (source?: ApiBiddingInfoAltDto | null): BiddingInfoAlt => {
  return {
    bestBid: source?.BestBid,
    endDate: source?.EndDate,
    maxAvailableBidValue: source?.MaxAvailableBidValue,
    minAvailableBidValue: source?.MinAvailableBidValue,
    participantsCount: source?.ParticipantsCount,
    reductionPrice: source?.ReductionPrice,
    startPrice: source?.StartPrice,
    status: source?.Status === null ? undefined : biddingStatusAltEnumAdapter(source?.Status),
    yourBestBid: source?.YourBestBid,
    yourRank: source?.YourRank,
  };
}
