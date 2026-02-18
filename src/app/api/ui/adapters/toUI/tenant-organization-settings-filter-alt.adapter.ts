import { ApiTenantOrganizationSettingsFilterAltDto } from '../../../swagger/models/api-tenant-organization-settings-filter';
import { TenantOrganizationSettingsFilterAlt } from '../../models/tenant-organization-settings-filter-alt.interface';

export function adaptTenantOrganizationSettingsFilterAltToUI(source?: ApiTenantOrganizationSettingsFilterAltDto | null): TenantOrganizationSettingsFilterAlt {
  return (source ?? {}) as TenantOrganizationSettingsFilterAlt;
}
