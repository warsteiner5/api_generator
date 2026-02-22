import { ExternalLotItemsParticipantOffersInfo } from '../../models/external-lot-items-participant-offers-info.interface';
import { ApiExternalLotItemsParticipantOffersInfoDto } from '../../../swagger/models/api-external-lot-items-participant-offers-info-dto';
import { apiExternalLinkOfferToLotItemDtoAdapter } from './api-external-link-offer-to-lot-item-dto.adapter';

export const apiExternalLotItemsParticipantOffersInfoDtoAdapter = (source?: ExternalLotItemsParticipantOffersInfo | null): ApiExternalLotItemsParticipantOffersInfoDto => {
  return {
    LotItemId: source?.lotItemId,
    LotItemName: source?.lotItemName,
    LotItemOrderNumber: source?.lotItemOrderNumber,
    ParticipantOfferCount: source?.participantOfferCount,
    ParticipantOffers: source?.participantOffers?.map((item) => apiExternalLinkOfferToLotItemDtoAdapter(item)),
  };
}
