import { ApiGetParticipantOffersByTradeResponseDto } from '../../../swagger/models/api-get-participant-offers-by-trade-response-dto';
import { GetParticipantOffersByTradeResponse } from '../../models/get-participant-offers-by-trade-response.interface';
import { participantOfferShortInfoAdapter } from './participant-offer-short-info.adapter';
import { privateDocumentAdapter } from './private-document.adapter';

export const getParticipantOffersByTradeResponseAdapter = (source?: ApiGetParticipantOffersByTradeResponseDto | null): GetParticipantOffersByTradeResponse => {
  return {
    participantOffers: source?.ParticipantOffers?.map((item) => participantOfferShortInfoAdapter(item)),
    privateDocuments: source?.PrivateDocuments?.map((item) => privateDocumentAdapter(item)),
  };
}
