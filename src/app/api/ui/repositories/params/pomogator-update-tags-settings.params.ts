import { PomogatorUpdateTagsSettings$Params } from '../../../swagger/fn/pomogator/pomogator-update-tags-settings';
import { TagSettingsUpdate } from '../../models/tag-settings-update.interface';
import { apiTagSettingsUpdateDtoAdapter } from '../../adapters/models/api-tag-settings-update-dto.adapter';

// @ts-ignore
export interface PomogatorUpdateTagsSettingsParams {
  body?: TagSettingsUpdate;
}

export function pomogatorUpdateTagsSettingsAdapter(params?: PomogatorUpdateTagsSettingsParams): PomogatorUpdateTagsSettings$Params {
  if (!params) {
    return {} as PomogatorUpdateTagsSettings$Params;
  }
  return {
      body: apiTagSettingsUpdateDtoAdapter(params.body),
  };
}
