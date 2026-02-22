import { TagSettingsToggle } from '../../models/tag-settings-toggle.interface';
import { ApiTagSettingsToggleDto } from '../../../swagger/models/api-tag-settings-toggle-dto';
import { apiSearchTypeEnumAdapter } from '../enums/api-search-type-enum.adapter';

export const apiTagSettingsToggleDtoAdapter = (source?: TagSettingsToggle | null): ApiTagSettingsToggleDto => {
  return {
    SettingsId: source?.settingsId,
    SettingsType: source?.settingsType === null ? undefined : apiSearchTypeEnumAdapter(source?.settingsType),
  };
}
