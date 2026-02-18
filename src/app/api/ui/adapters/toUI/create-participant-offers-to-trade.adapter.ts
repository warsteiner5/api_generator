import { ApiCreateParticipantOffersToTradeDto } from '../../../swagger/models/api-create-participant-offers-to-trade-dto';
import { CreateParticipantOffersToTrade } from '../../models/create-participant-offers-to-trade.interface';
import { adaptParticipantOfferToTradeLotItemToUI } from './participant-offer-to-trade-lot-item.adapter';
import { adaptPrivateDocumentToUI } from './private-document.adapter';

export function adaptCreateParticipantOffersToTradeToUI(source?: ApiCreateParticipantOffersToTradeDto | null): CreateParticipantOffersToTrade {
  return {
    items: (source?.Items ?? []).map((item) => adaptParticipantOfferToTradeLotItemToUI(item)),
    privateDocuments: (source?.PrivateDocuments ?? []).map((item) => adaptPrivateDocumentToUI(item)),
  };
}
