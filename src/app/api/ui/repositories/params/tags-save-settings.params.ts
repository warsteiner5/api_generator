import { TagParticipantSetting } from '../../models/tag-participant-setting.interface';
import { TagsSaveSettings$Params } from '../../../swagger/fn/tags/tags-save-settings';
import { apiTagParticipantSettingDtoAdapter } from '../../adapters/models/api-tag-participant-setting-dto.adapter';

// @ts-ignore
export interface TagsSaveSettingsParams {
  body?: TagParticipantSetting[];
}

export function tagsSaveSettingsAdapter(params?: TagsSaveSettingsParams): TagsSaveSettings$Params {
  if (!params) {
    return {} as TagsSaveSettings$Params;
  }
  return {
      body: (params.body ?? []).map((item) => apiTagParticipantSettingDtoAdapter(item)),
  };
}
