import { OrganizationForAutocomplete } from '../../models/organization-for-autocomplete.interface';
import { ApiOrganizationForAutocompleteDto } from '../../../swagger/models/api-organization-for-autocomplete-dto';
import { apiAddressForOrganizationAutocompleteDtoAdapter } from './api-address-for-organization-autocomplete-dto.adapter';
import { apiOrganizationCountryAltEnumAdapter } from '../enums/api-organization-country.adapter';
import { apiOrganizationStatusAltEnumAdapter } from '../enums/api-organization-status.adapter';
import { apiOrganizationTypeEnumAdapter } from '../enums/api-organization-type-enum.adapter';

export const apiOrganizationForAutocompleteDtoAdapter = (source?: OrganizationForAutocomplete | null): ApiOrganizationForAutocompleteDto => {
  return {
    Address: source?.address === null ? undefined : apiAddressForOrganizationAutocompleteDtoAdapter(source?.address),
    ContactPerson: source?.contactPerson,
    Email: source?.email,
    ForeignParticipantId: source?.foreignParticipantId,
    FullName: source?.fullName,
    Guid: source?.guid,
    Id: source?.id,
    Inn: source?.inn,
    IsCustomer: source?.isCustomer,
    IsSMP: source?.isSMP,
    IsSupplier: source?.isSupplier,
    Kpp: source?.kpp,
    Name: source?.name,
    Ogrn: source?.ogrn,
    OrganizationCountry: source?.organizationCountry === null ? undefined : apiOrganizationCountryAltEnumAdapter(source?.organizationCountry),
    OrganizationCountryName: source?.organizationCountryName,
    OrganizationStatus: source?.organizationStatus === null ? undefined : apiOrganizationStatusAltEnumAdapter(source?.organizationStatus),
    OrganizationType: source?.organizationType === null ? undefined : apiOrganizationTypeEnumAdapter(source?.organizationType),
    RegNumber: source?.regNumber,
  };
}
