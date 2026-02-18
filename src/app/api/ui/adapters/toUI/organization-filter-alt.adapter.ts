import { ApiOrganizationFilterAltDto } from '../../../swagger/models/api-organization-filter';
import { OrganizationFilterAlt } from '../../models/organization-filter-alt.interface';

export function adaptOrganizationFilterAltToUI(source?: ApiOrganizationFilterAltDto | null): OrganizationFilterAlt {
  return (source ?? {}) as OrganizationFilterAlt;
}
