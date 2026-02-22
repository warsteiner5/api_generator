import { ApiOrganizationRegistrationCommonDto } from '../../../swagger/models/api-organization-registration-common-dto';
import { OrganizationRegistrationCommon } from '../../models/organization-registration-common.interface';
import { organizationTypeEnumAdapter } from '../enums/organization-type-enum.adapter';

export const organizationRegistrationCommonAdapter = (source?: ApiOrganizationRegistrationCommonDto | null): OrganizationRegistrationCommon => {
  return {
    contactPerson: source?.ContactPerson,
    country: source?.Country,
    directorFullName: source?.DirectorFullName,
    email: source?.Email,
    fullName: source?.FullName,
    inn: source?.Inn,
    isSmp: source?.IsSmp,
    kpp: source?.Kpp,
    ogrn: source?.Ogrn,
    phoneNumber: source?.PhoneNumber,
    shortName: source?.ShortName,
    type: source?.Type === null ? undefined : organizationTypeEnumAdapter(source?.Type),
    unp: source?.Unp,
  };
}
