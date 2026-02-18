import { ApiTagSettingsToggleDto } from '../../../swagger/models/api-tag-settings-toggle-dto';
import { TagSettingsToggle } from '../../models/tag-settings-toggle.interface';
import { adaptSearchTypeEnumToUI } from './search-type-enum.adapter';

export function adaptTagSettingsToggleToUI(source?: ApiTagSettingsToggleDto | null): TagSettingsToggle {
  return {
    settingsId: source?.SettingsId ?? '',
    settingsType: adaptSearchTypeEnumToUI(source?.SettingsType),
  };
}
