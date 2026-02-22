import { ApiTagSettingsDeleteDto } from '../../../swagger/models/api-tag-settings-delete-dto';
import { TagSettingsDelete } from '../../models/tag-settings-delete.interface';
import { searchTypeEnumAdapter } from '../enums/search-type-enum.adapter';

export const tagSettingsDeleteAdapter = (source?: ApiTagSettingsDeleteDto | null): TagSettingsDelete => {
  return {
    tagSettingsId: source?.TagSettingsId,
    type: source?.Type === null ? undefined : searchTypeEnumAdapter(source?.Type),
  };
}
