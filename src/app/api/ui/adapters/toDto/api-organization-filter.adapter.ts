import { OrganizationFilterAlt } from '../../models/organization-filter-alt.interface';
import { ApiOrganizationFilterAltDto } from '../../../swagger/models/api-organization-filter';

export function adaptApiOrganizationFilterAltDto(source?: OrganizationFilterAlt | null): ApiOrganizationFilterAltDto {
  return (source ?? {}) as ApiOrganizationFilterAltDto;
}
