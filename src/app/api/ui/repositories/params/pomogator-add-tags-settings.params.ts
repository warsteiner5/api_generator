import { PomogatorAddTagsSettings$Params } from '../../../swagger/fn/pomogator/pomogator-add-tags-settings';
import { TagSettingsAdd } from '../../models/tag-settings-add.interface';
import { adaptApiTagSettingsAddDto } from '../../adapters/toDto/api-tag-settings-add-dto.adapter';

export interface PomogatorAddTagsSettingsParams {
  body?: TagSettingsAdd;
}

export const pomogatorAddTagsSettingsParamsAdapter = {
  adapt(params?: PomogatorAddTagsSettingsParams): PomogatorAddTagsSettings$Params {
    if (!params) {
      return {} as PomogatorAddTagsSettings$Params;
    }
    return {
      body: adaptApiTagSettingsAddDto(params.body),
    };
  }
};
