import { Complaint } from '../../models/complaint.interface';
import { ApiComplaintDto } from '../../../swagger/models/api-complaint-dto';
import { apiComplaintCloseReasonEnumAdapter } from '../enums/api-complaint-close-reason-enum.adapter';
import { apiComplaintStateEnumAdapter } from '../enums/api-complaint-state-enum.adapter';
import { apiParticipantOfferComplaintCreateRequestAltDtoAdapter } from './api-participant-offer-complaint-create-request.adapter';

export const apiComplaintDtoAdapter = (source?: Complaint | null): ApiComplaintDto => {
  return {
    ...apiParticipantOfferComplaintCreateRequestAltDtoAdapter(source as unknown as Parameters<typeof apiParticipantOfferComplaintCreateRequestAltDtoAdapter>[0]),
    Id: source?.id,
    UserId: source?.userId,
    State: source?.state === null ? undefined : apiComplaintStateEnumAdapter(source?.state),
    ManagerId: source?.managerId,
    ReviewDate: source?.reviewDate,
    CloseReason: source?.closeReason === null ? undefined : apiComplaintCloseReasonEnumAdapter(source?.closeReason),
    CloseComment: source?.closeComment,
  };
}
