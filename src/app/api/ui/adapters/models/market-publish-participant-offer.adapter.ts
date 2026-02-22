import { ApiMarketPublishParticipantOfferDto } from '../../../swagger/models/api-market-publish-participant-offer-dto';
import { MarketPublishParticipantOffer } from '../../models/market-publish-participant-offer.interface';
import { marketParticipantOfferAdapter } from './market-participant-offer.adapter';

export const marketPublishParticipantOfferAdapter = (source?: ApiMarketPublishParticipantOfferDto | null): MarketPublishParticipantOffer => {
  return {
    hasStockRemains: source?.HasStockRemains,
    organizationId: source?.OrganizationId,
    participantOfferDto: source?.ParticipantOfferDto === null ? undefined : marketParticipantOfferAdapter(source?.ParticipantOfferDto),
  };
}
