import { PomogatorGetSettingsTags$Params } from '../../../swagger/fn/pomogator/pomogator-get-settings-tags';
import { SearchObjectAlt } from '../../models/search-object-alt.interface';
import { adaptApiSearchObjectAltDto } from '../../adapters/toDto/api-search-object.adapter';

export interface PomogatorGetSettingsTagsParams {
  body?: SearchObjectAlt;
}

export const pomogatorGetSettingsTagsParamsAdapter = {
  adapt(params?: PomogatorGetSettingsTagsParams): PomogatorGetSettingsTags$Params {
    if (!params) {
      return {} as PomogatorGetSettingsTags$Params;
    }
    return {
      body: adaptApiSearchObjectAltDto(params.body),
    };
  }
};
