import { ExternalPublishParticipantOffer } from '../../models/external-publish-participant-offer.interface';
import { ApiExternalPublishParticipantOfferDto } from '../../../swagger/models/api-external-publish-participant-offer-dto';
import { apiMarketPublishParticipantOfferDtoAdapter } from './api-market-publish-participant-offer-dto.adapter';

export const apiExternalPublishParticipantOfferDtoAdapter = (source?: ExternalPublishParticipantOffer | null): ApiExternalPublishParticipantOfferDto => {
  return {
    ...apiMarketPublishParticipantOfferDtoAdapter(source as unknown as Parameters<typeof apiMarketPublishParticipantOfferDtoAdapter>[0]),
    IsChanged: source?.isChanged,
    IsCreatedByManager: source?.isCreatedByManager,
    TenantId: source?.tenantId,
    UserId: source?.userId,
  };
}
