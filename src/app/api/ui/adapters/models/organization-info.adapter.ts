import { ApiOrganizationInfoDto } from '../../../swagger/models/api-organization-info-dto';
import { OrganizationInfo } from '../../models/organization-info.interface';
import { addressAdapter } from './address.adapter';
import { bankInfoAdapter } from './bank-info.adapter';
import { organizationCountryAltEnumAdapter } from '../enums/organization-country-alt-enum.adapter';
import { organizationTypeEnumAdapter } from '../enums/organization-type-enum.adapter';

export const organizationInfoAdapter = (source?: ApiOrganizationInfoDto | null): OrganizationInfo => {
  return {
    address: source?.Address === null ? undefined : addressAdapter(source?.Address),
    bankInfo: source?.BankInfo === null ? undefined : bankInfoAdapter(source?.BankInfo),
    director: source?.Director,
    email: source?.Email,
    faxNumber: source?.FaxNumber,
    foreignParticipantId: source?.ForeignParticipantId,
    fullName: source?.FullName,
    guid: source?.Guid,
    id: source?.Id,
    inn: source?.Inn,
    isCustomer: source?.IsCustomer,
    isSmp: source?.IsSmp,
    isSupplier: source?.IsSupplier,
    kpp: source?.Kpp,
    ogrn: source?.Ogrn,
    organizationCountry: source?.OrganizationCountry === null ? undefined : organizationCountryAltEnumAdapter(source?.OrganizationCountry),
    organizationType: source?.OrganizationType === null ? undefined : organizationTypeEnumAdapter(source?.OrganizationType),
    phoneNumber: source?.PhoneNumber,
    postAddress: source?.PostAddress === null ? undefined : addressAdapter(source?.PostAddress),
    shortName: source?.ShortName,
  };
}
