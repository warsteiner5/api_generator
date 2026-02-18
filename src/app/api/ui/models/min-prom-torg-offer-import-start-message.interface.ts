import { ExternalIntegrationParticipantOffer } from './external-integration-participant-offer.interface';

export interface MinPromTorgOfferImportStartMessage {
  importTaskId: number;
  offers: ExternalIntegrationParticipantOffer[];
}
