import { OrganizationRegistrationCommon } from '../../models/organization-registration-common.interface';
import { ApiOrganizationRegistrationCommonDto } from '../../../swagger/models/api-organization-registration-common-dto';
import { adaptApiOrganizationTypeEnum } from './api-organization-type-enum.adapter';

export function adaptApiOrganizationRegistrationCommonDto(source?: OrganizationRegistrationCommon | null): ApiOrganizationRegistrationCommonDto {
  return {
    ContactPerson: source?.contactPerson,
    Country: source?.country,
    DirectorFullName: source?.directorFullName,
    Email: source?.email,
    FullName: source?.fullName,
    Inn: source?.inn,
    IsSmp: source?.isSmp,
    Kpp: source?.kpp,
    Ogrn: source?.ogrn,
    PhoneNumber: source?.phoneNumber,
    ShortName: source?.shortName,
    Type: adaptApiOrganizationTypeEnum(source?.type),
    Unp: source?.unp,
  };
}
