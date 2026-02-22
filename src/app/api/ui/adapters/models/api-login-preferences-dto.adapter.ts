import { LoginPreferences } from '../../models/login-preferences.interface';
import { ApiLoginPreferencesDto } from '../../../swagger/models/api-login-preferences-dto';

export const apiLoginPreferencesDtoAdapter = (source?: LoginPreferences | null): ApiLoginPreferencesDto => {
  return {
    RoleType: source?.roleType,
    TenantId: source?.tenantId,
  };
}
