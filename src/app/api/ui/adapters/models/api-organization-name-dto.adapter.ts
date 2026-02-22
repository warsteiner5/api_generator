import { OrganizationName } from '../../models/organization-name.interface';
import { ApiOrganizationNameDto } from '../../../swagger/models/api-organization-name-dto';

export const apiOrganizationNameDtoAdapter = (source?: OrganizationName | null): ApiOrganizationNameDto => {
  return {
    Id: source?.id,
    Name: source?.name,
  };
}
