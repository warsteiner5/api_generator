import { ParticipantOfferComplaintCreateRequestAlt } from '../../models/participant-offer-complaint-create-request-alt.interface';
import { ApiParticipantOfferComplaintCreateRequestAltDto } from '../../../swagger/models/api-participant-offer-complaint-create-request';
import { adaptApiComplaintTypeEnum } from './api-complaint-type-enum.adapter';

export function adaptApiParticipantOfferComplaintCreateRequestAltDto(source?: ParticipantOfferComplaintCreateRequestAlt | null): ApiParticipantOfferComplaintCreateRequestAltDto {
  return {
    ComplaintComment: source?.complaintComment,
    ParticipantOfferId: source?.participantOfferId,
    Type: adaptApiComplaintTypeEnum(source?.type),
  };
}
