import { ApiOrganizationFilterAltDto } from '../../../swagger/models/api-organization-filter';
import { OrganizationFilterAlt } from '../../models/organization-filter-alt.interface';

export const organizationFilterAltAdapter = (source?: ApiOrganizationFilterAltDto | null): OrganizationFilterAlt => {
  return (source ?? {}) as OrganizationFilterAlt;
}
