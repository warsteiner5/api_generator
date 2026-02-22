import { TagParticipantSetting } from '../../models/tag-participant-setting.interface';
import { ApiTagParticipantSettingDto } from '../../../swagger/models/api-tag-participant-setting-dto';
import { apiTagStatusEnumAdapter } from '../enums/api-tag-status-enum.adapter';

export const apiTagParticipantSettingDtoAdapter = (source?: TagParticipantSetting | null): ApiTagParticipantSettingDto => {
  return {
    Id: source?.id,
    OrderNumber: source?.orderNumber,
    TagStatus: source?.tagStatus === null ? undefined : apiTagStatusEnumAdapter(source?.tagStatus),
  };
}
