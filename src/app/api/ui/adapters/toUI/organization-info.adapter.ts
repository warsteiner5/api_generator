import { ApiOrganizationInfoDto } from '../../../swagger/models/api-organization-info-dto';
import { OrganizationInfo } from '../../models/organization-info.interface';
import { adaptAddressToUI } from './address.adapter';
import { adaptBankInfoToUI } from './bank-info.adapter';
import { adaptOrganizationCountryAltEnumToUI } from './organization-country-alt-enum.adapter';
import { adaptOrganizationTypeEnumToUI } from './organization-type-enum.adapter';

export function adaptOrganizationInfoToUI(source?: ApiOrganizationInfoDto | null): OrganizationInfo {
  return {
    address: adaptAddressToUI(source?.Address),
    bankInfo: adaptBankInfoToUI(source?.BankInfo),
    director: source?.Director ?? '',
    email: source?.Email ?? '',
    faxNumber: source?.FaxNumber ?? '',
    foreignParticipantId: source?.ForeignParticipantId ?? '',
    fullName: source?.FullName ?? '',
    guid: source?.Guid ?? '',
    id: source?.Id ?? 0,
    inn: source?.Inn ?? '',
    isCustomer: source?.IsCustomer ?? false,
    isSmp: source?.IsSmp ?? false,
    isSupplier: source?.IsSupplier ?? false,
    kpp: source?.Kpp ?? '',
    ogrn: source?.Ogrn ?? '',
    organizationCountry: adaptOrganizationCountryAltEnumToUI(source?.OrganizationCountry),
    organizationType: adaptOrganizationTypeEnumToUI(source?.OrganizationType),
    phoneNumber: source?.PhoneNumber ?? '',
    postAddress: adaptAddressToUI(source?.PostAddress),
    shortName: source?.ShortName ?? '',
  };
}
