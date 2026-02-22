import { ApiParticipantOfferComplaintCreateRequestAltDto } from '../../../swagger/models/api-participant-offer-complaint-create-request';
import { ParticipantOfferComplaintCreateRequestAlt } from '../../models/participant-offer-complaint-create-request-alt.interface';
import { complaintTypeEnumAdapter } from '../enums/complaint-type-enum.adapter';

export const participantOfferComplaintCreateRequestAltAdapter = (source?: ApiParticipantOfferComplaintCreateRequestAltDto | null): ParticipantOfferComplaintCreateRequestAlt => {
  return {
    complaintComment: source?.ComplaintComment,
    participantOfferId: source?.ParticipantOfferId,
    type: source?.Type === null ? undefined : complaintTypeEnumAdapter(source?.Type),
  };
}
