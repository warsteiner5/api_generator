import { ApiUserInOrganizationAltDto } from '../../../swagger/models/api-user-in-organization';
import { UserInOrganizationAlt } from '../../models/user-in-organization-alt.interface';
import { adaptAuthExternalOrganizationToUI } from './auth-external-organization.adapter';

export function adaptUserInOrganizationAltToUI(source?: ApiUserInOrganizationAltDto | null): UserInOrganizationAlt {
  return {
    authExternalOrganizations: (source?.AuthExternalOrganizations ?? []).map((item) => adaptAuthExternalOrganizationToUI(item)),
    guid: source?.Guid ?? '',
    id: source?.Id ?? 0,
    name: source?.Name ?? '',
  };
}
