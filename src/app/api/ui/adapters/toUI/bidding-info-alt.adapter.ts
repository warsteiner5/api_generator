import { ApiBiddingInfoAltDto } from '../../../swagger/models/api-bidding-info';
import { BiddingInfoAlt } from '../../models/bidding-info-alt.interface';
import { adaptBiddingStatusAltEnumToUI } from './bidding-status-alt-enum.adapter';

export function adaptBiddingInfoAltToUI(source?: ApiBiddingInfoAltDto | null): BiddingInfoAlt {
  return {
    bestBid: source?.BestBid ?? 0,
    endDate: source?.EndDate ?? '',
    maxAvailableBidValue: source?.MaxAvailableBidValue ?? 0,
    minAvailableBidValue: source?.MinAvailableBidValue ?? 0,
    participantsCount: source?.ParticipantsCount ?? 0,
    reductionPrice: source?.ReductionPrice ?? 0,
    startPrice: source?.StartPrice ?? 0,
    status: adaptBiddingStatusAltEnumToUI(source?.Status),
    yourBestBid: source?.YourBestBid ?? 0,
    yourRank: source?.YourRank ?? 0,
  };
}
