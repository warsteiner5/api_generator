import { TenantOrganizationSettingRequestAlt } from '../../models/tenant-organization-setting-request-alt.interface';
import { ApiTenantOrganizationSettingRequestAltDto } from '../../../swagger/models/api-tenant-organization-setting-request';

export const apiTenantOrganizationSettingRequestAltDtoAdapter = (source?: TenantOrganizationSettingRequestAlt | null): ApiTenantOrganizationSettingRequestAltDto => {
  return {
    AllowTradeCreate: source?.allowTradeCreate,
    AllowTradeUpdate: source?.allowTradeUpdate,
    Id: source?.id,
    OrganizationId: source?.organizationId,
  };
}
