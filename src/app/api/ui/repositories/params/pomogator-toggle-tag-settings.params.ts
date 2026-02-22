import { PomogatorToggleTagSettings$Params } from '../../../swagger/fn/pomogator/pomogator-toggle-tag-settings';
import { TagSettingsToggle } from '../../models/tag-settings-toggle.interface';
import { apiTagSettingsToggleDtoAdapter } from '../../adapters/models/api-tag-settings-toggle-dto.adapter';

// @ts-ignore
export interface PomogatorToggleTagSettingsParams {
  body?: TagSettingsToggle;
}

export function pomogatorToggleTagSettingsAdapter(params?: PomogatorToggleTagSettingsParams): PomogatorToggleTagSettings$Params {
  if (!params) {
    return {} as PomogatorToggleTagSettings$Params;
  }
  return {
      body: apiTagSettingsToggleDtoAdapter(params.body),
  };
}
