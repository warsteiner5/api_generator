import { CreateParticipantOffersToTrade } from '../../models/create-participant-offers-to-trade.interface';
import { ApiCreateParticipantOffersToTradeDto } from '../../../swagger/models/api-create-participant-offers-to-trade-dto';
import { apiParticipantOfferToTradeLotItemDtoAdapter } from './api-participant-offer-to-trade-lot-item-dto.adapter';
import { apiPrivateDocumentDtoAdapter } from './api-private-document-dto.adapter';

export const apiCreateParticipantOffersToTradeDtoAdapter = (source?: CreateParticipantOffersToTrade | null): ApiCreateParticipantOffersToTradeDto => {
  return {
    Items: source?.items?.map((item) => apiParticipantOfferToTradeLotItemDtoAdapter(item)),
    PrivateDocuments: source?.privateDocuments?.map((item) => apiPrivateDocumentDtoAdapter(item)),
  };
}
