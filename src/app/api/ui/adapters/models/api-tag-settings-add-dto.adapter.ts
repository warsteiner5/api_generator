import { TagSettingsAdd } from '../../models/tag-settings-add.interface';
import { ApiTagSettingsAddDto } from '../../../swagger/models/api-tag-settings-add-dto';
import { apiSearchTypeEnumAdapter } from '../enums/api-search-type-enum.adapter';

export const apiTagSettingsAddDtoAdapter = (source?: TagSettingsAdd | null): ApiTagSettingsAddDto => {
  return {
    Tag: source?.tag,
    Type: source?.type === null ? undefined : apiSearchTypeEnumAdapter(source?.type),
  };
}
