import { ApiOrganizationForAutocompleteDto } from '../../../swagger/models/api-organization-for-autocomplete-dto';
import { OrganizationForAutocomplete } from '../../models/organization-for-autocomplete.interface';
import { adaptAddressForOrganizationAutocompleteToUI } from './address-for-organization-autocomplete.adapter';
import { adaptOrganizationCountryAltEnumToUI } from './organization-country-alt-enum.adapter';
import { adaptOrganizationStatusAltEnumToUI } from './organization-status-alt-enum.adapter';
import { adaptOrganizationTypeEnumToUI } from './organization-type-enum.adapter';

export function adaptOrganizationForAutocompleteToUI(source?: ApiOrganizationForAutocompleteDto | null): OrganizationForAutocomplete {
  return {
    address: adaptAddressForOrganizationAutocompleteToUI(source?.Address),
    contactPerson: source?.ContactPerson ?? '',
    email: source?.Email ?? '',
    foreignParticipantId: source?.ForeignParticipantId ?? '',
    fullName: source?.FullName ?? '',
    guid: source?.Guid ?? '',
    id: source?.Id ?? 0,
    inn: source?.Inn ?? '',
    isCustomer: source?.IsCustomer ?? false,
    isSMP: source?.IsSMP ?? false,
    isSupplier: source?.IsSupplier ?? false,
    kpp: source?.Kpp ?? '',
    name: source?.Name ?? '',
    ogrn: source?.Ogrn ?? '',
    organizationCountry: adaptOrganizationCountryAltEnumToUI(source?.OrganizationCountry),
    organizationCountryName: source?.OrganizationCountryName ?? '',
    organizationStatus: adaptOrganizationStatusAltEnumToUI(source?.OrganizationStatus),
    organizationType: adaptOrganizationTypeEnumToUI(source?.OrganizationType),
    regNumber: source?.RegNumber ?? '',
  };
}
