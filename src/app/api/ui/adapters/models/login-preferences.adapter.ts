import { ApiLoginPreferencesDto } from '../../../swagger/models/api-login-preferences-dto';
import { LoginPreferences } from '../../models/login-preferences.interface';

export const loginPreferencesAdapter = (source?: ApiLoginPreferencesDto | null): LoginPreferences => {
  return {
    roleType: source?.RoleType,
    tenantId: source?.TenantId,
  };
}
