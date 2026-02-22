import { TenantOrganizationSettingsFilterAlt } from '../../models/tenant-organization-settings-filter-alt.interface';
import { ApiTenantOrganizationSettingsFilterAltDto } from '../../../swagger/models/api-tenant-organization-settings-filter';

export const apiTenantOrganizationSettingsFilterAltDtoAdapter = (source?: TenantOrganizationSettingsFilterAlt | null): ApiTenantOrganizationSettingsFilterAltDto => {
  return (source ?? {}) as ApiTenantOrganizationSettingsFilterAltDto;
}
