import { ApiLoginPreferenceModelAltDto } from '../../../swagger/models/api-login-preference-model';
import { LoginPreferenceModelAlt } from '../../models/login-preference-model-alt.interface';

export function adaptLoginPreferenceModelAltToUI(source?: ApiLoginPreferenceModelAltDto | null): LoginPreferenceModelAlt {
  return {
    roleType: source?.RoleType ?? '',
    tenantId: source?.TenantId ?? 0,
    tenantUrl: source?.TenantUrl ?? '',
  };
}
