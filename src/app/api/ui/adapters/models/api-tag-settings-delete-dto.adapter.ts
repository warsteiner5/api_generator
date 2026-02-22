import { TagSettingsDelete } from '../../models/tag-settings-delete.interface';
import { ApiTagSettingsDeleteDto } from '../../../swagger/models/api-tag-settings-delete-dto';
import { apiSearchTypeEnumAdapter } from '../enums/api-search-type-enum.adapter';

export const apiTagSettingsDeleteDtoAdapter = (source?: TagSettingsDelete | null): ApiTagSettingsDeleteDto => {
  return {
    TagSettingsId: source?.tagSettingsId,
    Type: source?.type === null ? undefined : apiSearchTypeEnumAdapter(source?.type),
  };
}
