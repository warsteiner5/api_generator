import { ApiExternalPublishParticipantOfferDto } from '../../../swagger/models/api-external-publish-participant-offer-dto';
import { ExternalPublishParticipantOffer } from '../../models/external-publish-participant-offer.interface';

export function adaptExternalPublishParticipantOfferToUI(source?: ApiExternalPublishParticipantOfferDto | null): ExternalPublishParticipantOffer {
  return (source ?? {}) as ExternalPublishParticipantOffer;
}
