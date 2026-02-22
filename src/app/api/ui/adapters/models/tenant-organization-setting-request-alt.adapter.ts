import { ApiTenantOrganizationSettingRequestAltDto } from '../../../swagger/models/api-tenant-organization-setting-request';
import { TenantOrganizationSettingRequestAlt } from '../../models/tenant-organization-setting-request-alt.interface';

export const tenantOrganizationSettingRequestAltAdapter = (source?: ApiTenantOrganizationSettingRequestAltDto | null): TenantOrganizationSettingRequestAlt => {
  return {
    allowTradeCreate: source?.AllowTradeCreate,
    allowTradeUpdate: source?.AllowTradeUpdate,
    id: source?.Id,
    organizationId: source?.OrganizationId,
  };
}
