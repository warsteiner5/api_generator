import { OrganizationInfo } from '../../models/organization-info.interface';
import { ApiOrganizationInfoDto } from '../../../swagger/models/api-organization-info-dto';
import { apiAddressDtoAdapter } from './api-address-dto.adapter';
import { apiBankInfoDtoAdapter } from './api-bank-info-dto.adapter';
import { apiOrganizationCountryAltEnumAdapter } from '../enums/api-organization-country.adapter';
import { apiOrganizationTypeEnumAdapter } from '../enums/api-organization-type-enum.adapter';

export const apiOrganizationInfoDtoAdapter = (source?: OrganizationInfo | null): ApiOrganizationInfoDto => {
  return {
    Address: source?.address === null ? undefined : apiAddressDtoAdapter(source?.address),
    BankInfo: source?.bankInfo === null ? undefined : apiBankInfoDtoAdapter(source?.bankInfo),
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
    OrganizationCountry: source?.organizationCountry === null ? undefined : apiOrganizationCountryAltEnumAdapter(source?.organizationCountry),
    OrganizationType: source?.organizationType === null ? undefined : apiOrganizationTypeEnumAdapter(source?.organizationType),
    PhoneNumber: source?.phoneNumber,
    PostAddress: source?.postAddress === null ? undefined : apiAddressDtoAdapter(source?.postAddress),
    ShortName: source?.shortName,
  };
}
