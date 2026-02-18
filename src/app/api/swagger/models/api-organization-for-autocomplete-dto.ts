/* tslint:disable */
/* eslint-disable */
import { ApiAddressForOrganizationAutocompleteDto } from '../models/api-address-for-organization-autocomplete-dto';
import { ApiOrganizationCountryAltEnum } from '../models/api-organization-country';
import { ApiOrganizationStatusAltEnum } from '../models/api-organization-status';
import { ApiOrganizationTypeEnum } from '../models/api-organization-type-enum';
export interface ApiOrganizationForAutocompleteDto {
  Address?: ApiAddressForOrganizationAutocompleteDto | null;
  ContactPerson?: string | null;
  Email?: string | null;
  ForeignParticipantId?: string | null;
  FullName?: string | null;
  Guid?: string;
  Id?: number;
  Inn?: string | null;
  IsCustomer?: boolean;
  IsSMP?: boolean;
  IsSupplier?: boolean;
  Kpp?: string | null;
  Name?: string | null;
  Ogrn?: string | null;
  OrganizationCountry?: ApiOrganizationCountryAltEnum;
  OrganizationCountryName?: string | null;
  OrganizationStatus?: ApiOrganizationStatusAltEnum;
  OrganizationType?: ApiOrganizationTypeEnum;
  RegNumber?: string | null;
}
