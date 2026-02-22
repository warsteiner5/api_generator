import { UserInOrganization } from '../../models/user-in-organization.interface';
import { ApiUserInOrganizationDto } from '../../../swagger/models/api-user-in-organization-dto';
import { apiOrganizationTypeEnumAdapter } from '../enums/api-organization-type-enum.adapter';

export const apiUserInOrganizationDtoAdapter = (source?: UserInOrganization | null): ApiUserInOrganizationDto => {
  return {
    Guid: source?.guid,
    Inn: source?.inn,
    Kpp: source?.kpp,
    Name: source?.name,
    OrganizationType: source?.organizationType === null ? undefined : apiOrganizationTypeEnumAdapter(source?.organizationType),
  };
}
