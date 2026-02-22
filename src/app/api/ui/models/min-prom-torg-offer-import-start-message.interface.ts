import { ExternalIntegrationParticipantOffer } from './external-integration-participant-offer.interface';

// @ts-ignore
export interface MinPromTorgOfferImportStartMessage {
  importTaskId: number;
  offers: ExternalIntegrationParticipantOffer[];
}
