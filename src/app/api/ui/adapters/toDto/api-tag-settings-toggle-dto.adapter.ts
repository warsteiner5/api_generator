import { TagSettingsToggle } from '../../models/tag-settings-toggle.interface';
import { ApiTagSettingsToggleDto } from '../../../swagger/models/api-tag-settings-toggle-dto';
import { adaptApiSearchTypeEnum } from './api-search-type-enum.adapter';

export function adaptApiTagSettingsToggleDto(source?: TagSettingsToggle | null): ApiTagSettingsToggleDto {
  return {
    SettingsId: source?.settingsId,
    SettingsType: adaptApiSearchTypeEnum(source?.settingsType),
  };
}
