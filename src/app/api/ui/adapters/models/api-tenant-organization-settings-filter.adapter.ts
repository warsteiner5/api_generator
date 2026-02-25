import { TenantOrganizationSettingsFilterAlt } from '../../models/tenant-organization-settings-filter-alt.interface';
import { ApiTenantOrganizationSettingsFilterAltDto } from '../../../swagger/models/api-tenant-organization-settings-filter';
import { apiBaseFilterAltDtoAdapter } from './api-base-filter.adapter';

export const apiTenantOrganizationSettingsFilterAltDtoAdapter = (source?: TenantOrganizationSettingsFilterAlt | null): ApiTenantOrganizationSettingsFilterAltDto => {
  return {
    ...apiBaseFilterAltDtoAdapter(source as unknown as Parameters<typeof apiBaseFilterAltDtoAdapter>[0]),
    TenantId: source?.tenantId,
  };
}
