import { ApiSettingsAddedResponseAltDto } from '../../../swagger/models/api-settings-added-response';
import { SettingsAddedResponseAlt } from '../../models/settings-added-response-alt.interface';

export function adaptSettingsAddedResponseAltToUI(source?: ApiSettingsAddedResponseAltDto | null): SettingsAddedResponseAlt {
  return {
    settingsId: source?.SettingsId ?? '',
    settingsItemId: source?.SettingsItemId ?? '',
  };
}
