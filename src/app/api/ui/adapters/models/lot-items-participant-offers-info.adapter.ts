import { ApiLotItemsParticipantOffersInfoDto } from '../../../swagger/models/api-lot-items-participant-offers-info-dto';
import { LotItemsParticipantOffersInfo } from '../../models/lot-items-participant-offers-info.interface';
import { linkOfferToLotItemAdapter } from './link-offer-to-lot-item.adapter';

export const lotItemsParticipantOffersInfoAdapter = (source?: ApiLotItemsParticipantOffersInfoDto | null): LotItemsParticipantOffersInfo => {
  return {
    lotItemId: source?.LotItemId,
    lotItemName: source?.LotItemName,
    lotItemOrderNumber: source?.LotItemOrderNumber,
    participantOfferCount: source?.ParticipantOfferCount,
    participantOffers: source?.ParticipantOffers?.map((item) => linkOfferToLotItemAdapter(item)),
  };
}
