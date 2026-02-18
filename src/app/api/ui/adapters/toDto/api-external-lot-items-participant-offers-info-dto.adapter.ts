import { ExternalLotItemsParticipantOffersInfo } from '../../models/external-lot-items-participant-offers-info.interface';
import { ApiExternalLotItemsParticipantOffersInfoDto } from '../../../swagger/models/api-external-lot-items-participant-offers-info-dto';
import { adaptApiExternalLinkOfferToLotItemDto } from './api-external-link-offer-to-lot-item-dto.adapter';

export function adaptApiExternalLotItemsParticipantOffersInfoDto(source?: ExternalLotItemsParticipantOffersInfo | null): ApiExternalLotItemsParticipantOffersInfoDto {
  return {
    LotItemId: source?.lotItemId,
    LotItemName: source?.lotItemName,
    LotItemOrderNumber: source?.lotItemOrderNumber,
    ParticipantOfferCount: source?.participantOfferCount,
    ParticipantOffers: (source?.participantOffers ?? []).map((item) => adaptApiExternalLinkOfferToLotItemDto(item)),
  };
}
