import { ApiOrganizationUsersFilterAltDto } from '../../../swagger/models/api-organization-users-filter';
import { OrganizationUsersFilterAlt } from '../../models/organization-users-filter-alt.interface';
import { baseFilterObjectAltAdapter } from './base-filter-object-alt.adapter';

export const organizationUsersFilterAltAdapter = (source?: ApiOrganizationUsersFilterAltDto | null): OrganizationUsersFilterAlt => {
  return {
    ...baseFilterObjectAltAdapter(source as unknown as Parameters<typeof baseFilterObjectAltAdapter>[0]),
  };
}
