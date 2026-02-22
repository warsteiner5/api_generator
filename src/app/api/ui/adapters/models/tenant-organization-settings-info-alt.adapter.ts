import { ApiTenantOrganizationSettingsInfoAltDto } from '../../../swagger/models/api-tenant-organization-settings-info';
import { TenantOrganizationSettingsInfoAlt } from '../../models/tenant-organization-settings-info-alt.interface';

export const tenantOrganizationSettingsInfoAltAdapter = (source?: ApiTenantOrganizationSettingsInfoAltDto | null): TenantOrganizationSettingsInfoAlt => {
  return {
    allowTradeCreate: source?.AllowTradeCreate,
    allowTradeUpdate: source?.AllowTradeUpdate,
    id: source?.Id,
    inn: source?.Inn,
    kpp: source?.Kpp,
    name: source?.Name,
    organizationId: source?.OrganizationId,
  };
}
