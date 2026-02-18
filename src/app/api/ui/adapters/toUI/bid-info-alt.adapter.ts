import { ApiBidInfoAltDto } from '../../../swagger/models/api-bid-info';
import { BidInfoAlt } from '../../models/bid-info-alt.interface';

export function adaptBidInfoAltToUI(source?: ApiBidInfoAltDto | null): BidInfoAlt {
  return {
    amount: source?.Amount ?? 0,
    created: source?.Created ?? '',
    isBestBid: source?.IsBestBid ?? false,
    isYourBestBid: source?.IsYourBestBid ?? false,
    number: source?.Number ?? 0,
    participantInfo: source?.ParticipantInfo ?? '',
  };
}
