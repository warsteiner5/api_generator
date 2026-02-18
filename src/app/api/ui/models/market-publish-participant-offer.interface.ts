import { MarketParticipantOffer } from './market-participant-offer.interface';

export interface MarketPublishParticipantOffer {
  hasStockRemains: boolean;
  organizationId: number;
  participantOfferDto: MarketParticipantOffer;
}
