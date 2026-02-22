import { ApiOrganizationNameDto } from '../../../swagger/models/api-organization-name-dto';
import { OrganizationName } from '../../models/organization-name.interface';

export const organizationNameAdapter = (source?: ApiOrganizationNameDto | null): OrganizationName => {
  return {
    id: source?.Id,
    name: source?.Name,
  };
}
