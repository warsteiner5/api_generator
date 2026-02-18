import { OrganizationForAutocomplete } from '../../models/organization-for-autocomplete.interface';
import { ApiOrganizationForAutocompleteDto } from '../../../swagger/models/api-organization-for-autocomplete-dto';
import { adaptApiAddressForOrganizationAutocompleteDto } from './api-address-for-organization-autocomplete-dto.adapter';
import { adaptApiOrganizationCountryAltEnum } from './api-organization-country.adapter';
import { adaptApiOrganizationStatusAltEnum } from './api-organization-status.adapter';
import { adaptApiOrganizationTypeEnum } from './api-organization-type-enum.adapter';

export function adaptApiOrganizationForAutocompleteDto(source?: OrganizationForAutocomplete | null): ApiOrganizationForAutocompleteDto {
  return {
    Address: adaptApiAddressForOrganizationAutocompleteDto(source?.address),
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
    OrganizationCountry: adaptApiOrganizationCountryAltEnum(source?.organizationCountry),
    OrganizationCountryName: source?.organizationCountryName,
    OrganizationStatus: adaptApiOrganizationStatusAltEnum(source?.organizationStatus),
    OrganizationType: adaptApiOrganizationTypeEnum(source?.organizationType),
    RegNumber: source?.regNumber,
  };
}
