/* tslint:disable */
/* eslint-disable */
import { ApiParticipantOfferShortInfoDto } from '../models/api-participant-offer-short-info-dto';
import { ApiPrivateDocumentDto } from '../models/api-private-document-dto';
export interface ApiGetParticipantOffersByTradeResponseDto {
  ParticipantOffers?: Array<ApiParticipantOfferShortInfoDto> | null;
  PrivateDocuments?: Array<ApiPrivateDocumentDto> | null;
}
