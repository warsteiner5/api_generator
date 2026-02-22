import { ApiTagSettingsToggleDto } from '../../../swagger/models/api-tag-settings-toggle-dto';
import { TagSettingsToggle } from '../../models/tag-settings-toggle.interface';
import { searchTypeEnumAdapter } from '../enums/search-type-enum.adapter';

export const tagSettingsToggleAdapter = (source?: ApiTagSettingsToggleDto | null): TagSettingsToggle => {
  return {
    settingsId: source?.SettingsId,
    settingsType: source?.SettingsType === null ? undefined : searchTypeEnumAdapter(source?.SettingsType),
  };
}
