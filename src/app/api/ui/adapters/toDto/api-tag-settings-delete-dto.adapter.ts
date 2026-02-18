import { TagSettingsDelete } from '../../models/tag-settings-delete.interface';
import { ApiTagSettingsDeleteDto } from '../../../swagger/models/api-tag-settings-delete-dto';
import { adaptApiSearchTypeEnum } from './api-search-type-enum.adapter';

export function adaptApiTagSettingsDeleteDto(source?: TagSettingsDelete | null): ApiTagSettingsDeleteDto {
  return {
    TagSettingsId: source?.tagSettingsId,
    Type: adaptApiSearchTypeEnum(source?.type),
  };
}
