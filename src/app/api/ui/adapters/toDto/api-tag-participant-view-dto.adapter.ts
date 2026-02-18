import { TagParticipantView } from '../../models/tag-participant-view.interface';
import { ApiTagParticipantViewDto } from '../../../swagger/models/api-tag-participant-view-dto';
import { adaptApiTagStatusEnum } from './api-tag-status-enum.adapter';

export function adaptApiTagParticipantViewDto(source?: TagParticipantView | null): ApiTagParticipantViewDto {
  return {
    Code: source?.code,
    Id: source?.id,
    ImageGuid: source?.imageGuid,
    Name: source?.name,
    OrderNumber: source?.orderNumber,
    Status: adaptApiTagStatusEnum(source?.status),
  };
}
