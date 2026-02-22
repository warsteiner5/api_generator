import { TagSettingsSetRegions } from '../../models/tag-settings-set-regions.interface';
import { ApiTagSettingsSetRegionsDto } from '../../../swagger/models/api-tag-settings-set-regions-dto';
import { apiSearchTypeEnumAdapter } from '../enums/api-search-type-enum.adapter';

export const apiTagSettingsSetRegionsDtoAdapter = (source?: TagSettingsSetRegions | null): ApiTagSettingsSetRegionsDto => {
  return {
    Regions: source?.regions,
    Type: source?.type === null ? undefined : apiSearchTypeEnumAdapter(source?.type),
  };
}
