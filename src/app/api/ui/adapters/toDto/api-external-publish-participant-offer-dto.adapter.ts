import { ExternalPublishParticipantOffer } from '../../models/external-publish-participant-offer.interface';
import { ApiExternalPublishParticipantOfferDto } from '../../../swagger/models/api-external-publish-participant-offer-dto';

export function adaptApiExternalPublishParticipantOfferDto(source?: ExternalPublishParticipantOffer | null): ApiExternalPublishParticipantOfferDto {
  return (source ?? {}) as ApiExternalPublishParticipantOfferDto;
}
