import { ApiOrganizationForAutocompleteDto } from '../../../swagger/models/api-organization-for-autocomplete-dto';
import { OrganizationForAutocomplete } from '../../models/organization-for-autocomplete.interface';
import { addressForOrganizationAutocompleteAdapter } from './address-for-organization-autocomplete.adapter';
import { organizationCountryAltEnumAdapter } from '../enums/organization-country-alt-enum.adapter';
import { organizationStatusAltEnumAdapter } from '../enums/organization-status-alt-enum.adapter';
import { organizationTypeEnumAdapter } from '../enums/organization-type-enum.adapter';

export const organizationForAutocompleteAdapter = (source?: ApiOrganizationForAutocompleteDto | null): OrganizationForAutocomplete => {
  return {
    address: source?.Address === null ? undefined : addressForOrganizationAutocompleteAdapter(source?.Address),
    contactPerson: source?.ContactPerson,
    email: source?.Email,
    foreignParticipantId: source?.ForeignParticipantId,
    fullName: source?.FullName,
    guid: source?.Guid,
    id: source?.Id,
    inn: source?.Inn,
    isCustomer: source?.IsCustomer,
    isSMP: source?.IsSMP,
    isSupplier: source?.IsSupplier,
    kpp: source?.Kpp,
    name: source?.Name,
    ogrn: source?.Ogrn,
    organizationCountry: source?.OrganizationCountry === null ? undefined : organizationCountryAltEnumAdapter(source?.OrganizationCountry),
    organizationCountryName: source?.OrganizationCountryName,
    organizationStatus: source?.OrganizationStatus === null ? undefined : organizationStatusAltEnumAdapter(source?.OrganizationStatus),
    organizationType: source?.OrganizationType === null ? undefined : organizationTypeEnumAdapter(source?.OrganizationType),
    regNumber: source?.RegNumber,
  };
}
