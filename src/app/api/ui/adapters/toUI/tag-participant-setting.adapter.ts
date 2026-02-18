import { ApiTagParticipantSettingDto } from '../../../swagger/models/api-tag-participant-setting-dto';
import { TagParticipantSetting } from '../../models/tag-participant-setting.interface';
import { adaptTagStatusEnumToUI } from './tag-status-enum.adapter';

export function adaptTagParticipantSettingToUI(source?: ApiTagParticipantSettingDto | null): TagParticipantSetting {
  return {
    id: source?.Id ?? 0,
    orderNumber: source?.OrderNumber ?? 0,
    tagStatus: adaptTagStatusEnumToUI(source?.TagStatus),
  };
}
