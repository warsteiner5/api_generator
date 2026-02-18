import { ApiUserInOrganizationDto } from '../../../swagger/models/api-user-in-organization-dto';
import { UserInOrganization } from '../../models/user-in-organization.interface';
import { adaptOrganizationTypeEnumToUI } from './organization-type-enum.adapter';

export function adaptUserInOrganizationToUI(source?: ApiUserInOrganizationDto | null): UserInOrganization {
  return {
    guid: source?.Guid ?? '',
    inn: source?.Inn ?? '',
    kpp: source?.Kpp ?? '',
    name: source?.Name ?? '',
    organizationType: adaptOrganizationTypeEnumToUI(source?.OrganizationType),
  };
}
