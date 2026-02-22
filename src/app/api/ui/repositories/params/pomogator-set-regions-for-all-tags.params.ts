import { PomogatorSetRegionsForAllTags$Params } from '../../../swagger/fn/pomogator/pomogator-set-regions-for-all-tags';
import { TagSettingsSetRegions } from '../../models/tag-settings-set-regions.interface';
import { apiTagSettingsSetRegionsDtoAdapter } from '../../adapters/models/api-tag-settings-set-regions-dto.adapter';

// @ts-ignore
export interface PomogatorSetRegionsForAllTagsParams {
  body?: TagSettingsSetRegions;
}

export function pomogatorSetRegionsForAllTagsAdapter(params?: PomogatorSetRegionsForAllTagsParams): PomogatorSetRegionsForAllTags$Params {
  if (!params) {
    return {} as PomogatorSetRegionsForAllTags$Params;
  }
  return {
      body: apiTagSettingsSetRegionsDtoAdapter(params.body),
  };
}
