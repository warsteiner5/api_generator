import { TagSettingsSetRegions } from '../../models/tag-settings-set-regions.interface';
import { ApiTagSettingsSetRegionsDto } from '../../../swagger/models/api-tag-settings-set-regions-dto';
import { adaptApiSearchTypeEnum } from './api-search-type-enum.adapter';

export function adaptApiTagSettingsSetRegionsDto(source?: TagSettingsSetRegions | null): ApiTagSettingsSetRegionsDto {
  return {
    Regions: source?.regions ?? [],
    Type: adaptApiSearchTypeEnum(source?.type),
  };
}
