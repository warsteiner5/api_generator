import { ApiUserInOrganizationDto } from '../../../swagger/models/api-user-in-organization-dto';
import { UserInOrganization } from '../../models/user-in-organization.interface';
import { organizationTypeEnumAdapter } from '../enums/organization-type-enum.adapter';

export const userInOrganizationAdapter = (source?: ApiUserInOrganizationDto | null): UserInOrganization => {
  return {
    guid: source?.Guid,
    inn: source?.Inn,
    kpp: source?.Kpp,
    name: source?.Name,
    organizationType: source?.OrganizationType === null ? undefined : organizationTypeEnumAdapter(source?.OrganizationType),
  };
}
