import { ApiLotItemsParticipantOffersInfoDto } from '../../../swagger/models/api-lot-items-participant-offers-info-dto';
import { LotItemsParticipantOffersInfo } from '../../models/lot-items-participant-offers-info.interface';
import { adaptLinkOfferToLotItemToUI } from './link-offer-to-lot-item.adapter';

export function adaptLotItemsParticipantOffersInfoToUI(source?: ApiLotItemsParticipantOffersInfoDto | null): LotItemsParticipantOffersInfo {
  return {
    lotItemId: source?.LotItemId ?? 0,
    lotItemName: source?.LotItemName ?? '',
    lotItemOrderNumber: source?.LotItemOrderNumber ?? 0,
    participantOfferCount: source?.ParticipantOfferCount ?? 0,
    participantOffers: (source?.ParticipantOffers ?? []).map((item) => adaptLinkOfferToLotItemToUI(item)),
  };
}
