import { ExternalIntegrationParticipantOffer } from './external-integration-participant-offer.interface';

export interface ExternalIntegrationOfferImportRequestAlt {
  etpOrganizationId: number;
  offers: ExternalIntegrationParticipantOffer[];
}
