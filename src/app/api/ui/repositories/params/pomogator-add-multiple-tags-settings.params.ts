import { MultipleTagSettingsAdd } from '../../models/multiple-tag-settings-add.interface';
import { PomogatorAddMultipleTagsSettings$Params } from '../../../swagger/fn/pomogator/pomogator-add-multiple-tags-settings';
import { adaptApiMultipleTagSettingsAddDto } from '../../adapters/toDto/api-multiple-tag-settings-add-dto.adapter';

export interface PomogatorAddMultipleTagsSettingsParams {
  body?: MultipleTagSettingsAdd;
}

export const pomogatorAddMultipleTagsSettingsParamsAdapter = {
  adapt(params?: PomogatorAddMultipleTagsSettingsParams): PomogatorAddMultipleTagsSettings$Params {
    if (!params) {
      return {} as PomogatorAddMultipleTagsSettings$Params;
    }
    return {
      body: adaptApiMultipleTagSettingsAddDto(params.body),
    };
  }
};
