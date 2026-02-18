import { ApiOrganizationRegistrationCommonDto } from '../../../swagger/models/api-organization-registration-common-dto';
import { OrganizationRegistrationCommon } from '../../models/organization-registration-common.interface';
import { adaptOrganizationTypeEnumToUI } from './organization-type-enum.adapter';

export function adaptOrganizationRegistrationCommonToUI(source?: ApiOrganizationRegistrationCommonDto | null): OrganizationRegistrationCommon {
  return {
    contactPerson: source?.ContactPerson ?? '',
    country: source?.Country ?? '',
    directorFullName: source?.DirectorFullName ?? '',
    email: source?.Email ?? '',
    fullName: source?.FullName ?? '',
    inn: source?.Inn ?? '',
    isSmp: source?.IsSmp ?? false,
    kpp: source?.Kpp ?? '',
    ogrn: source?.Ogrn ?? '',
    phoneNumber: source?.PhoneNumber ?? '',
    shortName: source?.ShortName ?? '',
    type: adaptOrganizationTypeEnumToUI(source?.Type),
    unp: source?.Unp ?? '',
  };
}
