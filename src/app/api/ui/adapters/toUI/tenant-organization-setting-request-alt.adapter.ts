import { ApiTenantOrganizationSettingRequestAltDto } from '../../../swagger/models/api-tenant-organization-setting-request';
import { TenantOrganizationSettingRequestAlt } from '../../models/tenant-organization-setting-request-alt.interface';

export function adaptTenantOrganizationSettingRequestAltToUI(source?: ApiTenantOrganizationSettingRequestAltDto | null): TenantOrganizationSettingRequestAlt {
  return {
    allowTradeCreate: source?.AllowTradeCreate ?? false,
    allowTradeUpdate: source?.AllowTradeUpdate ?? false,
    id: source?.Id ?? 0,
    organizationId: source?.OrganizationId ?? 0,
  };
}
