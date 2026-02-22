import { ApiTagSettingsSetRegionsDto } from '../../../swagger/models/api-tag-settings-set-regions-dto';
import { TagSettingsSetRegions } from '../../models/tag-settings-set-regions.interface';
import { searchTypeEnumAdapter } from '../enums/search-type-enum.adapter';

export const tagSettingsSetRegionsAdapter = (source?: ApiTagSettingsSetRegionsDto | null): TagSettingsSetRegions => {
  return {
    regions: source?.Regions,
    type: source?.Type === null ? undefined : searchTypeEnumAdapter(source?.Type),
  };
}
