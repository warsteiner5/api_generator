import { ApiTagSettingsSetRegionsDto } from '../../../swagger/models/api-tag-settings-set-regions-dto';
import { TagSettingsSetRegions } from '../../models/tag-settings-set-regions.interface';
import { adaptSearchTypeEnumToUI } from './search-type-enum.adapter';

export function adaptTagSettingsSetRegionsToUI(source?: ApiTagSettingsSetRegionsDto | null): TagSettingsSetRegions {
  return {
    regions: source?.Regions ?? [],
    type: adaptSearchTypeEnumToUI(source?.Type),
  };
}
