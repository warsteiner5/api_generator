import { ParticipantOfferShortInfo } from './participant-offer-short-info.interface';
import { PrivateDocument } from './private-document.interface';

// @ts-ignore
export interface GetParticipantOffersByTradeResponse {
  participantOffers: ParticipantOfferShortInfo[];
  privateDocuments: PrivateDocument[];
}
