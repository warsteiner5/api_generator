import { ApiExternalLotItemsParticipantOffersInfoDto } from '../../../swagger/models/api-external-lot-items-participant-offers-info-dto';
import { ExternalLotItemsParticipantOffersInfo } from '../../models/external-lot-items-participant-offers-info.interface';
import { externalLinkOfferToLotItemAdapter } from './external-link-offer-to-lot-item.adapter';

export const externalLotItemsParticipantOffersInfoAdapter = (source?: ApiExternalLotItemsParticipantOffersInfoDto | null): ExternalLotItemsParticipantOffersInfo => {
  return {
    lotItemId: source?.LotItemId,
    lotItemName: source?.LotItemName,
    lotItemOrderNumber: source?.LotItemOrderNumber,
    participantOfferCount: source?.ParticipantOfferCount,
    participantOffers: source?.ParticipantOffers?.map((item) => externalLinkOfferToLotItemAdapter(item)),
  };
}
