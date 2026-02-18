import { ApiGetParticipantOffersByTradeResponseDto } from '../../../swagger/models/api-get-participant-offers-by-trade-response-dto';
import { GetParticipantOffersByTradeResponse } from '../../models/get-participant-offers-by-trade-response.interface';
import { adaptParticipantOfferShortInfoToUI } from './participant-offer-short-info.adapter';
import { adaptPrivateDocumentToUI } from './private-document.adapter';

export function adaptGetParticipantOffersByTradeResponseToUI(source?: ApiGetParticipantOffersByTradeResponseDto | null): GetParticipantOffersByTradeResponse {
  return {
    participantOffers: (source?.ParticipantOffers ?? []).map((item) => adaptParticipantOfferShortInfoToUI(item)),
    privateDocuments: (source?.PrivateDocuments ?? []).map((item) => adaptPrivateDocumentToUI(item)),
  };
}
