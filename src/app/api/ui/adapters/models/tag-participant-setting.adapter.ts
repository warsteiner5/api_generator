import { ApiTagParticipantSettingDto } from '../../../swagger/models/api-tag-participant-setting-dto';
import { TagParticipantSetting } from '../../models/tag-participant-setting.interface';
import { tagStatusEnumAdapter } from '../enums/tag-status-enum.adapter';

export const tagParticipantSettingAdapter = (source?: ApiTagParticipantSettingDto | null): TagParticipantSetting => {
  return {
    id: source?.Id,
    orderNumber: source?.OrderNumber,
    tagStatus: source?.TagStatus === null ? undefined : tagStatusEnumAdapter(source?.TagStatus),
  };
}
