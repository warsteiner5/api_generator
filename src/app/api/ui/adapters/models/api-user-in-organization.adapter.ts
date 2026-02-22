import { UserInOrganizationAlt } from '../../models/user-in-organization-alt.interface';
import { ApiUserInOrganizationAltDto } from '../../../swagger/models/api-user-in-organization';
import { apiAuthExternalOrganizationDtoAdapter } from './api-auth-external-organization-dto.adapter';

export const apiUserInOrganizationAltDtoAdapter = (source?: UserInOrganizationAlt | null): ApiUserInOrganizationAltDto => {
  return {
    AuthExternalOrganizations: source?.authExternalOrganizations?.map((item) => apiAuthExternalOrganizationDtoAdapter(item)),
    Guid: source?.guid,
    Id: source?.id,
    Name: source?.name,
  };
}
