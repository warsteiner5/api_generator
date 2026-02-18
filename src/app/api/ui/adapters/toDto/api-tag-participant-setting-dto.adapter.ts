import { TagParticipantSetting } from '../../models/tag-participant-setting.interface';
import { ApiTagParticipantSettingDto } from '../../../swagger/models/api-tag-participant-setting-dto';
import { adaptApiTagStatusEnum } from './api-tag-status-enum.adapter';

export function adaptApiTagParticipantSettingDto(source?: TagParticipantSetting | null): ApiTagParticipantSettingDto {
  return {
    Id: source?.id,
    OrderNumber: source?.orderNumber,
    TagStatus: adaptApiTagStatusEnum(source?.tagStatus),
  };
}
