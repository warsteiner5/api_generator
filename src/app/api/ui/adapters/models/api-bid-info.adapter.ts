import { BidInfoAlt } from '../../models/bid-info-alt.interface';
import { ApiBidInfoAltDto } from '../../../swagger/models/api-bid-info';

export const apiBidInfoAltDtoAdapter = (source?: BidInfoAlt | null): ApiBidInfoAltDto => {
  return {
    Amount: source?.amount,
    Created: source?.created,
    IsBestBid: source?.isBestBid,
    IsYourBestBid: source?.isYourBestBid,
    Number: source?.number,
    ParticipantInfo: source?.participantInfo,
  };
}
