import { GetParticipantOffersByTradeResponse } from '../../models/get-participant-offers-by-trade-response.interface';
import { ApiGetParticipantOffersByTradeResponseDto } from '../../../swagger/models/api-get-participant-offers-by-trade-response-dto';
import { adaptApiParticipantOfferShortInfoDto } from './api-participant-offer-short-info-dto.adapter';
import { adaptApiPrivateDocumentDto } from './api-private-document-dto.adapter';

export function adaptApiGetParticipantOffersByTradeResponseDto(source?: GetParticipantOffersByTradeResponse | null): ApiGetParticipantOffersByTradeResponseDto {
  return {
    ParticipantOffers: (source?.participantOffers ?? []).map((item) => adaptApiParticipantOfferShortInfoDto(item)),
    PrivateDocuments: (source?.privateDocuments ?? []).map((item) => adaptApiPrivateDocumentDto(item)),
  };
}
