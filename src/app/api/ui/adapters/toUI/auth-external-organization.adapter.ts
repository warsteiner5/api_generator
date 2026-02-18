import { ApiAuthExternalOrganizationDto } from '../../../swagger/models/api-auth-external-organization-dto';
import { AuthExternalOrganization } from '../../models/auth-external-organization.interface';
import { adaptAuthExternalSystemsAltEnumToUI } from './auth-external-systems-alt-enum.adapter';

export function adaptAuthExternalOrganizationToUI(source?: ApiAuthExternalOrganizationDto | null): AuthExternalOrganization {
  return {
    authExternalOrganizationId: source?.AuthExternalOrganizationId ?? '',
    authExternalSystem: adaptAuthExternalSystemsAltEnumToUI(source?.AuthExternalSystem),
  };
}
