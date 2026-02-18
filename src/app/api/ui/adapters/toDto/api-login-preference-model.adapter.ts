import { LoginPreferenceModelAlt } from '../../models/login-preference-model-alt.interface';
import { ApiLoginPreferenceModelAltDto } from '../../../swagger/models/api-login-preference-model';

export function adaptApiLoginPreferenceModelAltDto(source?: LoginPreferenceModelAlt | null): ApiLoginPreferenceModelAltDto {
  return {
    RoleType: source?.roleType,
    TenantId: source?.tenantId,
    TenantUrl: source?.tenantUrl,
  };
}
