import { ApiExternalPublishParticipantOfferDto } from '../../../swagger/models/api-external-publish-participant-offer-dto';
import { ExternalPublishParticipantOffer } from '../../models/external-publish-participant-offer.interface';
import { marketPublishParticipantOfferAdapter } from './market-publish-participant-offer.adapter';

export const externalPublishParticipantOfferAdapter = (source?: ApiExternalPublishParticipantOfferDto | null): ExternalPublishParticipantOffer => {
  return {
    ...marketPublishParticipantOfferAdapter(source as unknown as Parameters<typeof marketPublishParticipantOfferAdapter>[0]),
    isChanged: source?.IsChanged,
    isCreatedByManager: source?.IsCreatedByManager,
    tenantId: source?.TenantId,
    userId: source?.UserId,
  };
}
