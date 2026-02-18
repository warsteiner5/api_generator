import { ApiOrganizationUsersFilterAltDto } from '../../../swagger/models/api-organization-users-filter';
import { OrganizationUsersFilterAlt } from '../../models/organization-users-filter-alt.interface';

export function adaptOrganizationUsersFilterAltToUI(source?: ApiOrganizationUsersFilterAltDto | null): OrganizationUsersFilterAlt {
  return (source ?? {}) as OrganizationUsersFilterAlt;
}
