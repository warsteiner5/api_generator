import { ApiTenantOrganizationSettingsInfoAltDto } from '../../../swagger/models/api-tenant-organization-settings-info';
import { TenantOrganizationSettingsInfoAlt } from '../../models/tenant-organization-settings-info-alt.interface';

export function adaptTenantOrganizationSettingsInfoAltToUI(source?: ApiTenantOrganizationSettingsInfoAltDto | null): TenantOrganizationSettingsInfoAlt {
  return {
    allowTradeCreate: source?.AllowTradeCreate ?? false,
    allowTradeUpdate: source?.AllowTradeUpdate ?? false,
    id: source?.Id ?? 0,
    inn: source?.Inn ?? '',
    kpp: source?.Kpp ?? '',
    name: source?.Name ?? '',
    organizationId: source?.OrganizationId ?? 0,
  };
}
