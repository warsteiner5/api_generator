import { OrganizationUsersFilterAlt } from '../../models/organization-users-filter-alt.interface';
import { ApiOrganizationUsersFilterAltDto } from '../../../swagger/models/api-organization-users-filter';
import { apiBaseFilterObjectAltDtoAdapter } from './api-base-filter-object.adapter';

export const apiOrganizationUsersFilterAltDtoAdapter = (source?: OrganizationUsersFilterAlt | null): ApiOrganizationUsersFilterAltDto => {
  return {
    ...apiBaseFilterObjectAltDtoAdapter(source as unknown as Parameters<typeof apiBaseFilterObjectAltDtoAdapter>[0]),
  };
}
