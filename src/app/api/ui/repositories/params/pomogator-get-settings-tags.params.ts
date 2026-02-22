import { PomogatorGetSettingsTags$Params } from '../../../swagger/fn/pomogator/pomogator-get-settings-tags';
import { SearchObjectAlt } from '../../models/search-object-alt.interface';
import { apiSearchObjectAltDtoAdapter } from '../../adapters/models/api-search-object.adapter';

// @ts-ignore
export interface PomogatorGetSettingsTagsParams {
  body?: SearchObjectAlt;
}

export function pomogatorGetSettingsTagsAdapter(params?: PomogatorGetSettingsTagsParams): PomogatorGetSettingsTags$Params {
  if (!params) {
    return {} as PomogatorGetSettingsTags$Params;
  }
  return {
      body: apiSearchObjectAltDtoAdapter(params.body),
  };
}
