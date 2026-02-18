import { UserInOrganizationAlt } from '../../models/user-in-organization-alt.interface';
import { ApiUserInOrganizationAltDto } from '../../../swagger/models/api-user-in-organization';
import { adaptApiAuthExternalOrganizationDto } from './api-auth-external-organization-dto.adapter';

export function adaptApiUserInOrganizationAltDto(source?: UserInOrganizationAlt | null): ApiUserInOrganizationAltDto {
  return {
    AuthExternalOrganizations: (source?.authExternalOrganizations ?? []).map((item) => adaptApiAuthExternalOrganizationDto(item)),
    Guid: source?.guid,
    Id: source?.id,
    Name: source?.name,
  };
}
