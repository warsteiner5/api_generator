import { OrganizationUsersFilterAlt } from '../../models/organization-users-filter-alt.interface';
import { ApiOrganizationUsersFilterAltDto } from '../../../swagger/models/api-organization-users-filter';

export function adaptApiOrganizationUsersFilterAltDto(source?: OrganizationUsersFilterAlt | null): ApiOrganizationUsersFilterAltDto {
  return (source ?? {}) as ApiOrganizationUsersFilterAltDto;
}
