import { PomogatorDeleteTagsSettings$Params } from '../../../swagger/fn/pomogator/pomogator-delete-tags-settings';
import { TagSettingsDelete } from '../../models/tag-settings-delete.interface';
import { apiTagSettingsDeleteDtoAdapter } from '../../adapters/models/api-tag-settings-delete-dto.adapter';

// @ts-ignore
export interface PomogatorDeleteTagsSettingsParams {
  body?: TagSettingsDelete;
}

export function pomogatorDeleteTagsSettingsAdapter(params?: PomogatorDeleteTagsSettingsParams): PomogatorDeleteTagsSettings$Params {
  if (!params) {
    return {} as PomogatorDeleteTagsSettings$Params;
  }
  return {
      body: apiTagSettingsDeleteDtoAdapter(params.body),
  };
}
