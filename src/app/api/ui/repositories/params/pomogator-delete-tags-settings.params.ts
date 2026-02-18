import { PomogatorDeleteTagsSettings$Params } from '../../../swagger/fn/pomogator/pomogator-delete-tags-settings';
import { TagSettingsDelete } from '../../models/tag-settings-delete.interface';
import { adaptApiTagSettingsDeleteDto } from '../../adapters/toDto/api-tag-settings-delete-dto.adapter';

export interface PomogatorDeleteTagsSettingsParams {
  body?: TagSettingsDelete;
}

export const pomogatorDeleteTagsSettingsParamsAdapter = {
  adapt(params?: PomogatorDeleteTagsSettingsParams): PomogatorDeleteTagsSettings$Params {
    if (!params) {
      return {} as PomogatorDeleteTagsSettings$Params;
    }
    return {
      body: adaptApiTagSettingsDeleteDto(params.body),
    };
  }
};
