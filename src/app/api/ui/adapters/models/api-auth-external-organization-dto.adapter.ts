import { AuthExternalOrganization } from '../../models/auth-external-organization.interface';
import { ApiAuthExternalOrganizationDto } from '../../../swagger/models/api-auth-external-organization-dto';
import { apiAuthExternalSystemsAltEnumAdapter } from '../enums/api-auth-external-systems.adapter';

export const apiAuthExternalOrganizationDtoAdapter = (source?: AuthExternalOrganization | null): ApiAuthExternalOrganizationDto => {
  return {
    AuthExternalOrganizationId: source?.authExternalOrganizationId,
    AuthExternalSystem: source?.authExternalSystem === null ? undefined : apiAuthExternalSystemsAltEnumAdapter(source?.authExternalSystem),
  };
}
