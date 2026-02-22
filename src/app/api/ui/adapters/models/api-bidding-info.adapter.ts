import { BiddingInfoAlt } from '../../models/bidding-info-alt.interface';
import { ApiBiddingInfoAltDto } from '../../../swagger/models/api-bidding-info';
import { apiBiddingStatusAltEnumAdapter } from '../enums/api-bidding-status.adapter';

export const apiBiddingInfoAltDtoAdapter = (source?: BiddingInfoAlt | null): ApiBiddingInfoAltDto => {
  return {
    BestBid: source?.bestBid,
    EndDate: source?.endDate,
    MaxAvailableBidValue: source?.maxAvailableBidValue,
    MinAvailableBidValue: source?.minAvailableBidValue,
    ParticipantsCount: source?.participantsCount,
    ReductionPrice: source?.reductionPrice,
    StartPrice: source?.startPrice,
    Status: source?.status === null ? undefined : apiBiddingStatusAltEnumAdapter(source?.status),
    YourBestBid: source?.yourBestBid,
    YourRank: source?.yourRank,
  };
}
