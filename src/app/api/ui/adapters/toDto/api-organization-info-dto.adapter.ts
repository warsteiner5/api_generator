import { OrganizationInfo } from '../../models/organization-info.interface';
import { ApiOrganizationInfoDto } from '../../../swagger/models/api-organization-info-dto';
import { adaptApiAddressDto } from './api-address-dto.adapter';
import { adaptApiBankInfoDto } from './api-bank-info-dto.adapter';
import { adaptApiOrganizationCountryAltEnum } from './api-organization-country.adapter';
import { adaptApiOrganizationTypeEnum } from './api-organization-type-enum.adapter';

export function adaptApiOrganizationInfoDto(source?: OrganizationInfo | null): ApiOrganizationInfoDto {
  return {
    Address: adaptApiAddressDto(source?.address),
    BankInfo: adaptApiBankInfoDto(source?.bankInfo),
    Director: source?.director,
    Email: source?.email,
    FaxNumber: source?.faxNumber,
    ForeignParticipantId: source?.foreignParticipantId,
    FullName: source?.fullName,
    Guid: source?.guid,
    Id: source?.id,
    Inn: source?.inn,
    IsCustomer: source?.isCustomer,
    IsSmp: source?.isSmp,
    IsSupplier: source?.isSupplier,
    Kpp: source?.kpp,
    Ogrn: source?.ogrn,
    OrganizationCountry: adaptApiOrganizationCountryAltEnum(source?.organizationCountry),
    OrganizationType: adaptApiOrganizationTypeEnum(source?.organizationType),
    PhoneNumber: source?.phoneNumber,
    PostAddress: adaptApiAddressDto(source?.postAddress),
    ShortName: source?.shortName,
  };
}
