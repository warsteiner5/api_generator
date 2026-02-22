import { LotItemsParticipantOffersInfo } from '../../models/lot-items-participant-offers-info.interface';
import { ApiLotItemsParticipantOffersInfoDto } from '../../../swagger/models/api-lot-items-participant-offers-info-dto';
import { apiLinkOfferToLotItemDtoAdapter } from './api-link-offer-to-lot-item-dto.adapter';

export const apiLotItemsParticipantOffersInfoDtoAdapter = (source?: LotItemsParticipantOffersInfo | null): ApiLotItemsParticipantOffersInfoDto => {
  return {
    LotItemId: source?.lotItemId,
    LotItemName: source?.lotItemName,
    LotItemOrderNumber: source?.lotItemOrderNumber,
    ParticipantOfferCount: source?.participantOfferCount,
    ParticipantOffers: source?.participantOffers?.map((item) => apiLinkOfferToLotItemDtoAdapter(item)),
  };
}
