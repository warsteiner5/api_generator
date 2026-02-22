import { ApiLoginPreferenceModelAltDto } from '../../../swagger/models/api-login-preference-model';
import { LoginPreferenceModelAlt } from '../../models/login-preference-model-alt.interface';

export const loginPreferenceModelAltAdapter = (source?: ApiLoginPreferenceModelAltDto | null): LoginPreferenceModelAlt => {
  return {
    roleType: source?.RoleType,
    tenantId: source?.TenantId,
    tenantUrl: source?.TenantUrl,
  };
}
