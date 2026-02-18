import { MarketPublishParticipantOffer } from './market-publish-participant-offer.interface';

export type ExternalPublishParticipantOffer = MarketPublishParticipantOffer & { 'IsChanged'?: boolean; 'IsCreatedByManager'?: boolean; 'TenantId'?: number; 'UserId'?: number; };
