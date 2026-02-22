import { ApiTagParticipantViewDto } from '../../../swagger/models/api-tag-participant-view-dto';
import { TagParticipantView } from '../../models/tag-participant-view.interface';
import { tagStatusEnumAdapter } from '../enums/tag-status-enum.adapter';

export const tagParticipantViewAdapter = (source?: ApiTagParticipantViewDto | null): TagParticipantView => {
  return {
    code: source?.Code,
    id: source?.Id,
    imageGuid: source?.ImageGuid,
    name: source?.Name,
    orderNumber: source?.OrderNumber,
    status: source?.Status === null ? undefined : tagStatusEnumAdapter(source?.Status),
  };
}
