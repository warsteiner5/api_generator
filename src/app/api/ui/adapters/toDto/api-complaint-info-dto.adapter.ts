import { ComplaintInfo } from '../../models/complaint-info.interface';
import { ApiComplaintInfoDto } from '../../../swagger/models/api-complaint-info-dto';
import { adaptApiComplaintAuthorDto } from './api-complaint-author-dto.adapter';
import { adaptApiComplaintCloseReasonEnum } from './api-complaint-close-reason-enum.adapter';
import { adaptApiComplaintStateEnum } from './api-complaint-state-enum.adapter';
import { adaptApiComplaintTypeEnum } from './api-complaint-type-enum.adapter';
import { adaptApiManagerInfoDto } from './api-manager-info-dto.adapter';
import { adaptApiParticipantOfferInfoDto } from './api-participant-offer-info-dto.adapter';

export function adaptApiComplaintInfoDto(source?: ComplaintInfo | null): ApiComplaintInfoDto {
  return {
    CloseComment: source?.closeComment,
    CloseReason: adaptApiComplaintCloseReasonEnum(source?.closeReason),
    ComplaintAuthor: adaptApiComplaintAuthorDto(source?.complaintAuthor),
    ComplaintComment: source?.complaintComment,
    ComplaintId: source?.complaintId,
    CreateDate: source?.createDate,
    Manager: adaptApiManagerInfoDto(source?.manager),
    ParticipantOffer: adaptApiParticipantOfferInfoDto(source?.participantOffer),
    ReviewDate: source?.reviewDate,
    State: adaptApiComplaintStateEnum(source?.state),
    Type: adaptApiComplaintTypeEnum(source?.type),
  };
}
