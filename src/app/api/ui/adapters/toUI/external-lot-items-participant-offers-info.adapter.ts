import { ApiExternalLotItemsParticipantOffersInfoDto } from '../../../swagger/models/api-external-lot-items-participant-offers-info-dto';
import { ExternalLotItemsParticipantOffersInfo } from '../../models/external-lot-items-participant-offers-info.interface';
import { adaptExternalLinkOfferToLotItemToUI } from './external-link-offer-to-lot-item.adapter';

export function adaptExternalLotItemsParticipantOffersInfoToUI(source?: ApiExternalLotItemsParticipantOffersInfoDto | null): ExternalLotItemsParticipantOffersInfo {
  return {
    lotItemId: source?.LotItemId ?? 0,
    lotItemName: source?.LotItemName ?? '',
    lotItemOrderNumber: source?.LotItemOrderNumber ?? 0,
    participantOfferCount: source?.ParticipantOfferCount ?? 0,
    participantOffers: (source?.ParticipantOffers ?? []).map((item) => adaptExternalLinkOfferToLotItemToUI(item)),
  };
}
