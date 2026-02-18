import { ApiComplaintInfoDto } from '../../../swagger/models/api-complaint-info-dto';
import { ComplaintInfo } from '../../models/complaint-info.interface';
import { adaptComplaintAuthorToUI } from './complaint-author.adapter';
import { adaptComplaintCloseReasonEnumToUI } from './complaint-close-reason-enum.adapter';
import { adaptComplaintStateEnumToUI } from './complaint-state-enum.adapter';
import { adaptComplaintTypeEnumToUI } from './complaint-type-enum.adapter';
import { adaptManagerInfoToUI } from './manager-info.adapter';
import { adaptParticipantOfferInfoToUI } from './participant-offer-info.adapter';

export function adaptComplaintInfoToUI(source?: ApiComplaintInfoDto | null): ComplaintInfo {
  return {
    closeComment: source?.CloseComment ?? '',
    closeReason: adaptComplaintCloseReasonEnumToUI(source?.CloseReason),
    complaintAuthor: adaptComplaintAuthorToUI(source?.ComplaintAuthor),
    complaintComment: source?.ComplaintComment ?? '',
    complaintId: source?.ComplaintId ?? 0,
    createDate: source?.CreateDate ?? '',
    manager: adaptManagerInfoToUI(source?.Manager),
    participantOffer: adaptParticipantOfferInfoToUI(source?.ParticipantOffer),
    reviewDate: source?.ReviewDate ?? '',
    state: adaptComplaintStateEnumToUI(source?.State),
    type: adaptComplaintTypeEnumToUI(source?.Type),
  };
}
