import { ApiUserInOrganizationAltDto } from '../../../swagger/models/api-user-in-organization';
import { UserInOrganizationAlt } from '../../models/user-in-organization-alt.interface';
import { authExternalOrganizationAdapter } from './auth-external-organization.adapter';

export const userInOrganizationAltAdapter = (source?: ApiUserInOrganizationAltDto | null): UserInOrganizationAlt => {
  return {
    authExternalOrganizations: source?.AuthExternalOrganizations?.map((item) => authExternalOrganizationAdapter(item)),
    guid: source?.Guid,
    id: source?.Id,
    name: source?.Name,
  };
}
