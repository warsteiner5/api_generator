import { TenantOrganizationSettingsInfoAlt } from '../../models/tenant-organization-settings-info-alt.interface';
import { ApiTenantOrganizationSettingsInfoAltDto } from '../../../swagger/models/api-tenant-organization-settings-info';

export const apiTenantOrganizationSettingsInfoAltDtoAdapter = (source?: TenantOrganizationSettingsInfoAlt | null): ApiTenantOrganizationSettingsInfoAltDto => {
  return {
    AllowTradeCreate: source?.allowTradeCreate,
    AllowTradeUpdate: source?.allowTradeUpdate,
    Id: source?.id,
    Inn: source?.inn,
    Kpp: source?.kpp,
    Name: source?.name,
    OrganizationId: source?.organizationId,
  };
}
