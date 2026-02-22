import { TagParticipantView } from '../../models/tag-participant-view.interface';
import { ApiTagParticipantViewDto } from '../../../swagger/models/api-tag-participant-view-dto';
import { apiTagStatusEnumAdapter } from '../enums/api-tag-status-enum.adapter';

export const apiTagParticipantViewDtoAdapter = (source?: TagParticipantView | null): ApiTagParticipantViewDto => {
  return {
    Code: source?.code,
    Id: source?.id,
    ImageGuid: source?.imageGuid,
    Name: source?.name,
    OrderNumber: source?.orderNumber,
    Status: source?.status === null ? undefined : apiTagStatusEnumAdapter(source?.status),
  };
}
