import { AuthExternalOrganization } from '../../models/auth-external-organization.interface';
import { ApiAuthExternalOrganizationDto } from '../../../swagger/models/api-auth-external-organization-dto';
import { adaptApiAuthExternalSystemsAltEnum } from './api-auth-external-systems.adapter';

export function adaptApiAuthExternalOrganizationDto(source?: AuthExternalOrganization | null): ApiAuthExternalOrganizationDto {
  return {
    AuthExternalOrganizationId: source?.authExternalOrganizationId,
    AuthExternalSystem: adaptApiAuthExternalSystemsAltEnum(source?.authExternalSystem),
  };
}
