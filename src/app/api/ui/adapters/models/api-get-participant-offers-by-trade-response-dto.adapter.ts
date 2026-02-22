import { GetParticipantOffersByTradeResponse } from '../../models/get-participant-offers-by-trade-response.interface';
import { ApiGetParticipantOffersByTradeResponseDto } from '../../../swagger/models/api-get-participant-offers-by-trade-response-dto';
import { apiParticipantOfferShortInfoDtoAdapter } from './api-participant-offer-short-info-dto.adapter';
import { apiPrivateDocumentDtoAdapter } from './api-private-document-dto.adapter';

export const apiGetParticipantOffersByTradeResponseDtoAdapter = (source?: GetParticipantOffersByTradeResponse | null): ApiGetParticipantOffersByTradeResponseDto => {
  return {
    ParticipantOffers: source?.participantOffers?.map((item) => apiParticipantOfferShortInfoDtoAdapter(item)),
    PrivateDocuments: source?.privateDocuments?.map((item) => apiPrivateDocumentDtoAdapter(item)),
  };
}
