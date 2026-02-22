import { MarketPublishParticipantOffer } from '../../models/market-publish-participant-offer.interface';
import { ApiMarketPublishParticipantOfferDto } from '../../../swagger/models/api-market-publish-participant-offer-dto';
import { apiMarketParticipantOfferDtoAdapter } from './api-market-participant-offer-dto.adapter';

export const apiMarketPublishParticipantOfferDtoAdapter = (source?: MarketPublishParticipantOffer | null): ApiMarketPublishParticipantOfferDto => {
  return {
    HasStockRemains: source?.hasStockRemains,
    OrganizationId: source?.organizationId,
    ParticipantOfferDto: source?.participantOfferDto === null ? undefined : apiMarketParticipantOfferDtoAdapter(source?.participantOfferDto),
  };
}
