import { ApiTagParticipantViewDto } from '../../../swagger/models/api-tag-participant-view-dto';
import { TagParticipantView } from '../../models/tag-participant-view.interface';
import { adaptTagStatusEnumToUI } from './tag-status-enum.adapter';

export function adaptTagParticipantViewToUI(source?: ApiTagParticipantViewDto | null): TagParticipantView {
  return {
    code: source?.Code ?? '',
    id: source?.Id ?? 0,
    imageGuid: source?.ImageGuid ?? '',
    name: source?.Name ?? '',
    orderNumber: source?.OrderNumber ?? 0,
    status: adaptTagStatusEnumToUI(source?.Status),
  };
}
