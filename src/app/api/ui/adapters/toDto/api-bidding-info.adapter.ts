import { BiddingInfoAlt } from '../../models/bidding-info-alt.interface';
import { ApiBiddingInfoAltDto } from '../../../swagger/models/api-bidding-info';
import { adaptApiBiddingStatusAltEnum } from './api-bidding-status.adapter';

export function adaptApiBiddingInfoAltDto(source?: BiddingInfoAlt | null): ApiBiddingInfoAltDto {
  return {
    BestBid: source?.bestBid,
    EndDate: source?.endDate,
    MaxAvailableBidValue: source?.maxAvailableBidValue,
    MinAvailableBidValue: source?.minAvailableBidValue,
    ParticipantsCount: source?.participantsCount,
    ReductionPrice: source?.reductionPrice,
    StartPrice: source?.startPrice,
    Status: adaptApiBiddingStatusAltEnum(source?.status),
    YourBestBid: source?.yourBestBid,
    YourRank: source?.yourRank,
  };
}
