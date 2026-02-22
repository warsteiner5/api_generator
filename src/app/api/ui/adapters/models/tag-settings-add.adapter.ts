import { ApiTagSettingsAddDto } from '../../../swagger/models/api-tag-settings-add-dto';
import { TagSettingsAdd } from '../../models/tag-settings-add.interface';
import { searchTypeEnumAdapter } from '../enums/search-type-enum.adapter';

export const tagSettingsAddAdapter = (source?: ApiTagSettingsAddDto | null): TagSettingsAdd => {
  return {
    tag: source?.Tag,
    type: source?.Type === null ? undefined : searchTypeEnumAdapter(source?.Type),
  };
}
