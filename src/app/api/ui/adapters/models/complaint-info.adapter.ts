import { ApiComplaintInfoDto } from '../../../swagger/models/api-complaint-info-dto';
import { ComplaintInfo } from '../../models/complaint-info.interface';
import { complaintAuthorAdapter } from './complaint-author.adapter';
import { complaintCloseReasonEnumAdapter } from '../enums/complaint-close-reason-enum.adapter';
import { complaintStateEnumAdapter } from '../enums/complaint-state-enum.adapter';
import { complaintTypeEnumAdapter } from '../enums/complaint-type-enum.adapter';
import { managerInfoAdapter } from './manager-info.adapter';
import { participantOfferInfoAdapter } from './participant-offer-info.adapter';

export const complaintInfoAdapter = (source?: ApiComplaintInfoDto | null): ComplaintInfo => {
  return {
    closeComment: source?.CloseComment,
    closeReason: source?.CloseReason === null ? undefined : complaintCloseReasonEnumAdapter(source?.CloseReason),
    complaintAuthor: source?.ComplaintAuthor === null ? undefined : complaintAuthorAdapter(source?.ComplaintAuthor),
    complaintComment: source?.ComplaintComment,
    complaintId: source?.ComplaintId,
    createDate: source?.CreateDate,
    manager: source?.Manager === null ? undefined : managerInfoAdapter(source?.Manager),
    participantOffer: source?.ParticipantOffer === null ? undefined : participantOfferInfoAdapter(source?.ParticipantOffer),
    reviewDate: source?.ReviewDate,
    state: source?.State === null ? undefined : complaintStateEnumAdapter(source?.State),
    type: source?.Type === null ? undefined : complaintTypeEnumAdapter(source?.Type),
  };
}
