import { TagSettingsAdd } from '../../models/tag-settings-add.interface';
import { ApiTagSettingsAddDto } from '../../../swagger/models/api-tag-settings-add-dto';
import { adaptApiSearchTypeEnum } from './api-search-type-enum.adapter';

export function adaptApiTagSettingsAddDto(source?: TagSettingsAdd | null): ApiTagSettingsAddDto {
  return {
    Tag: source?.tag,
    Type: adaptApiSearchTypeEnum(source?.type),
  };
}
