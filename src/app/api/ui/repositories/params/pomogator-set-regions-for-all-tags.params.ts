import { PomogatorSetRegionsForAllTags$Params } from '../../../swagger/fn/pomogator/pomogator-set-regions-for-all-tags';
import { TagSettingsSetRegions } from '../../models/tag-settings-set-regions.interface';
import { adaptApiTagSettingsSetRegionsDto } from '../../adapters/toDto/api-tag-settings-set-regions-dto.adapter';

export interface PomogatorSetRegionsForAllTagsParams {
  body?: TagSettingsSetRegions;
}

export const pomogatorSetRegionsForAllTagsParamsAdapter = {
  adapt(params?: PomogatorSetRegionsForAllTagsParams): PomogatorSetRegionsForAllTags$Params {
    if (!params) {
      return {} as PomogatorSetRegionsForAllTags$Params;
    }
    return {
      body: adaptApiTagSettingsSetRegionsDto(params.body),
    };
  }
};
