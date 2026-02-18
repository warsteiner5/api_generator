import { MarketPublishParticipantOffer } from '../../models/market-publish-participant-offer.interface';
import { ApiMarketPublishParticipantOfferDto } from '../../../swagger/models/api-market-publish-participant-offer-dto';
import { adaptApiMarketParticipantOfferDto } from './api-market-participant-offer-dto.adapter';

export function adaptApiMarketPublishParticipantOfferDto(source?: MarketPublishParticipantOffer | null): ApiMarketPublishParticipantOfferDto {
  return {
    HasStockRemains: source?.hasStockRemains,
    OrganizationId: source?.organizationId,
    ParticipantOfferDto: adaptApiMarketParticipantOfferDto(source?.participantOfferDto),
  };
}
