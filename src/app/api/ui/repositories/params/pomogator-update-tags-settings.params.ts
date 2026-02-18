import { PomogatorUpdateTagsSettings$Params } from '../../../swagger/fn/pomogator/pomogator-update-tags-settings';
import { TagSettingsUpdate } from '../../models/tag-settings-update.interface';
import { adaptApiTagSettingsUpdateDto } from '../../adapters/toDto/api-tag-settings-update-dto.adapter';

export interface PomogatorUpdateTagsSettingsParams {
  body?: TagSettingsUpdate;
}

export const pomogatorUpdateTagsSettingsParamsAdapter = {
  adapt(params?: PomogatorUpdateTagsSettingsParams): PomogatorUpdateTagsSettings$Params {
    if (!params) {
      return {} as PomogatorUpdateTagsSettings$Params;
    }
    return {
      body: adaptApiTagSettingsUpdateDto(params.body),
    };
  }
};
