import { ApiParticipantOfferComplaintCreateRequestAltDto } from '../../../swagger/models/api-participant-offer-complaint-create-request';
import { ParticipantOfferComplaintCreateRequestAlt } from '../../models/participant-offer-complaint-create-request-alt.interface';
import { adaptComplaintTypeEnumToUI } from './complaint-type-enum.adapter';

export function adaptParticipantOfferComplaintCreateRequestAltToUI(source?: ApiParticipantOfferComplaintCreateRequestAltDto | null): ParticipantOfferComplaintCreateRequestAlt {
  return {
    complaintComment: source?.ComplaintComment ?? '',
    participantOfferId: source?.ParticipantOfferId ?? 0,
    type: adaptComplaintTypeEnumToUI(source?.Type),
  };
}
