import { ParticipantOfferComplaintCreateRequestAlt } from '../../models/participant-offer-complaint-create-request-alt.interface';
import { ApiParticipantOfferComplaintCreateRequestAltDto } from '../../../swagger/models/api-participant-offer-complaint-create-request';
import { apiComplaintTypeEnumAdapter } from '../enums/api-complaint-type-enum.adapter';

export const apiParticipantOfferComplaintCreateRequestAltDtoAdapter = (source?: ParticipantOfferComplaintCreateRequestAlt | null): ApiParticipantOfferComplaintCreateRequestAltDto => {
  return {
    ComplaintComment: source?.complaintComment,
    ParticipantOfferId: source?.participantOfferId,
    Type: source?.type === null ? undefined : apiComplaintTypeEnumAdapter(source?.type),
  };
}
