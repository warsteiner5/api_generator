import { ApiBidInfoAltDto } from '../../../swagger/models/api-bid-info';
import { BidInfoAlt } from '../../models/bid-info-alt.interface';

export const bidInfoAltAdapter = (source?: ApiBidInfoAltDto | null): BidInfoAlt => {
  return {
    amount: source?.Amount,
    created: source?.Created,
    isBestBid: source?.IsBestBid,
    isYourBestBid: source?.IsYourBestBid,
    number: source?.Number,
    participantInfo: source?.ParticipantInfo,
  };
}
