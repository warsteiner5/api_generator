import { ApiCreateParticipantOffersToTradeDto } from '../../../swagger/models/api-create-participant-offers-to-trade-dto';
import { CreateParticipantOffersToTrade } from '../../models/create-participant-offers-to-trade.interface';
import { participantOfferToTradeLotItemAdapter } from './participant-offer-to-trade-lot-item.adapter';
import { privateDocumentAdapter } from './private-document.adapter';

export const createParticipantOffersToTradeAdapter = (source?: ApiCreateParticipantOffersToTradeDto | null): CreateParticipantOffersToTrade => {
  return {
    items: source?.Items?.map((item) => participantOfferToTradeLotItemAdapter(item)),
    privateDocuments: source?.PrivateDocuments?.map((item) => privateDocumentAdapter(item)),
  };
}
