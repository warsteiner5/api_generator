import { ApiAuthExternalOrganizationDto } from '../../../swagger/models/api-auth-external-organization-dto';
import { AuthExternalOrganization } from '../../models/auth-external-organization.interface';
import { authExternalSystemsAltEnumAdapter } from '../enums/auth-external-systems-alt-enum.adapter';

export const authExternalOrganizationAdapter = (source?: ApiAuthExternalOrganizationDto | null): AuthExternalOrganization => {
  return {
    authExternalOrganizationId: source?.AuthExternalOrganizationId,
    authExternalSystem: source?.AuthExternalSystem === null ? undefined : authExternalSystemsAltEnumAdapter(source?.AuthExternalSystem),
  };
}
