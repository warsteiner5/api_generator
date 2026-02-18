import { SettingsAddedResponseAlt } from '../../models/settings-added-response-alt.interface';
import { ApiSettingsAddedResponseAltDto } from '../../../swagger/models/api-settings-added-response';

export function adaptApiSettingsAddedResponseAltDto(source?: SettingsAddedResponseAlt | null): ApiSettingsAddedResponseAltDto {
  return {
    SettingsId: source?.settingsId,
    SettingsItemId: source?.settingsItemId,
  };
}
