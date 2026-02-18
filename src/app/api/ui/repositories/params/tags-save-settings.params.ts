import { TagParticipantSetting } from '../../models/tag-participant-setting.interface';
import { TagsSaveSettings$Params } from '../../../swagger/fn/tags/tags-save-settings';
import { adaptApiTagParticipantSettingDto } from '../../adapters/toDto/api-tag-participant-setting-dto.adapter';

export interface TagsSaveSettingsParams {
  body?: TagParticipantSetting[];
}

export const tagsSaveSettingsParamsAdapter = {
  adapt(params?: TagsSaveSettingsParams): TagsSaveSettings$Params {
    if (!params) {
      return {} as TagsSaveSettings$Params;
    }
    return {
      body: (params.body ?? []).map((item) => adaptApiTagParticipantSettingDto(item)),
    };
  }
};
