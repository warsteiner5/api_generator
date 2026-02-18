/* tslint:disable */
/* eslint-disable */
import { ApiParticipantOfferToTradeLotItemDto } from '../models/api-participant-offer-to-trade-lot-item-dto';
import { ApiPrivateDocumentDto } from '../models/api-private-document-dto';
export interface ApiCreateParticipantOffersToTradeDto {
  Items?: Array<ApiParticipantOfferToTradeLotItemDto> | null;
  PrivateDocuments?: Array<ApiPrivateDocumentDto> | null;
}
