import { MultipleTagSettingsAdd } from '../../models/multiple-tag-settings-add.interface';
import { PomogatorAddMultipleTagsSettings$Params } from '../../../swagger/fn/pomogator/pomogator-add-multiple-tags-settings';
import { apiMultipleTagSettingsAddDtoAdapter } from '../../adapters/models/api-multiple-tag-settings-add-dto.adapter';

// @ts-ignore
export interface PomogatorAddMultipleTagsSettingsParams {
  body?: MultipleTagSettingsAdd;
}

export function pomogatorAddMultipleTagsSettingsAdapter(params?: PomogatorAddMultipleTagsSettingsParams): PomogatorAddMultipleTagsSettings$Params {
  if (!params) {
    return {} as PomogatorAddMultipleTagsSettings$Params;
  }
  return {
      body: apiMultipleTagSettingsAddDtoAdapter(params.body),
  };
}
