import { PomogatorToggleTagSettings$Params } from '../../../swagger/fn/pomogator/pomogator-toggle-tag-settings';
import { TagSettingsToggle } from '../../models/tag-settings-toggle.interface';
import { adaptApiTagSettingsToggleDto } from '../../adapters/toDto/api-tag-settings-toggle-dto.adapter';

export interface PomogatorToggleTagSettingsParams {
  body?: TagSettingsToggle;
}

export const pomogatorToggleTagSettingsParamsAdapter = {
  adapt(params?: PomogatorToggleTagSettingsParams): PomogatorToggleTagSettings$Params {
    if (!params) {
      return {} as PomogatorToggleTagSettings$Params;
    }
    return {
      body: adaptApiTagSettingsToggleDto(params.body),
    };
  }
};
