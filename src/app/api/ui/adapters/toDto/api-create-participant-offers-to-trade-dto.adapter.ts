import { CreateParticipantOffersToTrade } from '../../models/create-participant-offers-to-trade.interface';
import { ApiCreateParticipantOffersToTradeDto } from '../../../swagger/models/api-create-participant-offers-to-trade-dto';
import { adaptApiParticipantOfferToTradeLotItemDto } from './api-participant-offer-to-trade-lot-item-dto.adapter';
import { adaptApiPrivateDocumentDto } from './api-private-document-dto.adapter';

export function adaptApiCreateParticipantOffersToTradeDto(source?: CreateParticipantOffersToTrade | null): ApiCreateParticipantOffersToTradeDto {
  return {
    Items: (source?.items ?? []).map((item) => adaptApiParticipantOfferToTradeLotItemDto(item)),
    PrivateDocuments: (source?.privateDocuments ?? []).map((item) => adaptApiPrivateDocumentDto(item)),
  };
}
