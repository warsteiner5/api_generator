import { ApiTenantOrganizationSettingsFilterAltDto } from '../../../swagger/models/api-tenant-organization-settings-filter';
import { TenantOrganizationSettingsFilterAlt } from '../../models/tenant-organization-settings-filter-alt.interface';
import { baseFilterAltAdapter } from './base-filter-alt.adapter';

export const tenantOrganizationSettingsFilterAltAdapter = (source?: ApiTenantOrganizationSettingsFilterAltDto | null): TenantOrganizationSettingsFilterAlt => {
  return {
    ...baseFilterAltAdapter(source as unknown as Parameters<typeof baseFilterAltAdapter>[0]),
    tenantId: source?.TenantId,
  };
}
