import { UserInOrganization } from '../../models/user-in-organization.interface';
import { ApiUserInOrganizationDto } from '../../../swagger/models/api-user-in-organization-dto';
import { adaptApiOrganizationTypeEnum } from './api-organization-type-enum.adapter';

export function adaptApiUserInOrganizationDto(source?: UserInOrganization | null): ApiUserInOrganizationDto {
  return {
    Guid: source?.guid,
    Inn: source?.inn,
    Kpp: source?.kpp,
    Name: source?.name,
    OrganizationType: adaptApiOrganizationTypeEnum(source?.organizationType),
  };
}
