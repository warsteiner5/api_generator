import { MarketParticipantOffer } from './market-participant-offer.interface';

// @ts-ignore
export interface MarketPublishParticipantOffer {
  hasStockRemains: boolean;
  organizationId: number;
  participantOfferDto: MarketParticipantOffer;
}
