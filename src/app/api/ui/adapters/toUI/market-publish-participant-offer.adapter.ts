import { ApiMarketPublishParticipantOfferDto } from '../../../swagger/models/api-market-publish-participant-offer-dto';
import { MarketPublishParticipantOffer } from '../../models/market-publish-participant-offer.interface';
import { adaptMarketParticipantOfferToUI } from './market-participant-offer.adapter';

export function adaptMarketPublishParticipantOfferToUI(source?: ApiMarketPublishParticipantOfferDto | null): MarketPublishParticipantOffer {
  return {
    hasStockRemains: source?.HasStockRemains ?? false,
    organizationId: source?.OrganizationId ?? 0,
    participantOfferDto: adaptMarketParticipantOfferToUI(source?.ParticipantOfferDto),
  };
}
