import { MarketPublishParticipantOffer } from './market-publish-participant-offer.interface';

// @ts-ignore
export interface ExternalPublishParticipantOffer extends MarketPublishParticipantOffer {
  isChanged: boolean;
  isCreatedByManager: boolean;
  tenantId: number;
  userId: number;
}
