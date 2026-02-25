import { ApiComplaintDto } from '../../../swagger/models/api-complaint-dto';
import { Complaint } from '../../models/complaint.interface';
import { complaintCloseReasonEnumAdapter } from '../enums/complaint-close-reason-enum.adapter';
import { complaintStateEnumAdapter } from '../enums/complaint-state-enum.adapter';
import { participantOfferComplaintCreateRequestAltAdapter } from './participant-offer-complaint-create-request-alt.adapter';

export const complaintAdapter = (source?: ApiComplaintDto | null): Complaint => {
  return {
    ...participantOfferComplaintCreateRequestAltAdapter(source as unknown as Parameters<typeof participantOfferComplaintCreateRequestAltAdapter>[0]),
    id: source?.Id,
    userId: source?.UserId,
    state: source?.State === null ? undefined : complaintStateEnumAdapter(source?.State),
    managerId: source?.ManagerId,
    reviewDate: source?.ReviewDate,
    closeReason: source?.CloseReason === null ? undefined : complaintCloseReasonEnumAdapter(source?.CloseReason),
    closeComment: source?.CloseComment,
  };
}
