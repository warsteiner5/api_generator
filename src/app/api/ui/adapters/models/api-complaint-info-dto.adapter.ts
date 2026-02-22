import { ComplaintInfo } from '../../models/complaint-info.interface';
import { ApiComplaintInfoDto } from '../../../swagger/models/api-complaint-info-dto';
import { apiComplaintAuthorDtoAdapter } from './api-complaint-author-dto.adapter';
import { apiComplaintCloseReasonEnumAdapter } from '../enums/api-complaint-close-reason-enum.adapter';
import { apiComplaintStateEnumAdapter } from '../enums/api-complaint-state-enum.adapter';
import { apiComplaintTypeEnumAdapter } from '../enums/api-complaint-type-enum.adapter';
import { apiManagerInfoDtoAdapter } from './api-manager-info-dto.adapter';
import { apiParticipantOfferInfoDtoAdapter } from './api-participant-offer-info-dto.adapter';

export const apiComplaintInfoDtoAdapter = (source?: ComplaintInfo | null): ApiComplaintInfoDto => {
  return {
    CloseComment: source?.closeComment,
    CloseReason: source?.closeReason === null ? undefined : apiComplaintCloseReasonEnumAdapter(source?.closeReason),
    ComplaintAuthor: source?.complaintAuthor === null ? undefined : apiComplaintAuthorDtoAdapter(source?.complaintAuthor),
    ComplaintComment: source?.complaintComment,
    ComplaintId: source?.complaintId,
    CreateDate: source?.createDate,
    Manager: source?.manager === null ? undefined : apiManagerInfoDtoAdapter(source?.manager),
    ParticipantOffer: source?.participantOffer === null ? undefined : apiParticipantOfferInfoDtoAdapter(source?.participantOffer),
    ReviewDate: source?.reviewDate,
    State: source?.state === null ? undefined : apiComplaintStateEnumAdapter(source?.state),
    Type: source?.type === null ? undefined : apiComplaintTypeEnumAdapter(source?.type),
  };
}
