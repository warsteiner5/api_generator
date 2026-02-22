import { PomogatorAddTagsSettings$Params } from '../../../swagger/fn/pomogator/pomogator-add-tags-settings';
import { TagSettingsAdd } from '../../models/tag-settings-add.interface';
import { apiTagSettingsAddDtoAdapter } from '../../adapters/models/api-tag-settings-add-dto.adapter';

// @ts-ignore
export interface PomogatorAddTagsSettingsParams {
  body?: TagSettingsAdd;
}

export function pomogatorAddTagsSettingsAdapter(params?: PomogatorAddTagsSettingsParams): PomogatorAddTagsSettings$Params {
  if (!params) {
    return {} as PomogatorAddTagsSettings$Params;
  }
  return {
      body: apiTagSettingsAddDtoAdapter(params.body),
  };
}
