import { ApiOrganizationNameDto } from '../../../swagger/models/api-organization-name-dto';
import { OrganizationName } from '../../models/organization-name.interface';

export function adaptOrganizationNameToUI(source?: ApiOrganizationNameDto | null): OrganizationName {
  return {
    id: source?.Id ?? 0,
    name: source?.Name ?? '',
  };
}
