import { ParticipantOfferShortInfo } from './participant-offer-short-info.interface';
import { PrivateDocument } from './private-document.interface';

export interface GetParticipantOffersByTradeResponse {
  participantOffers: ParticipantOfferShortInfo[];
  privateDocuments: PrivateDocument[];
}
