import { AddressForOrganizationAutocomplete } from './address-for-organization-autocomplete.interface';
import { OrganizationCountryAltEnum } from '../enums/organization-country-alt.enum';
import { OrganizationStatusAltEnum } from '../enums/organization-status-alt.enum';
import { OrganizationTypeEnum } from '../enums/organization-type.enum';

// @ts-ignore
export interface OrganizationForAutocomplete {
  address: AddressForOrganizationAutocomplete;
  contactPerson: string;
  email: string;
  foreignParticipantId: string;
  fullName: string;
  guid: string;
  id: number;
  inn: string;
  isCustomer: boolean;
  isSMP: boolean;
  isSupplier: boolean;
  kpp: string;
  name: string;
  ogrn: string;
  organizationCountry: OrganizationCountryAltEnum;
  organizationCountryName: string;
  organizationStatus: OrganizationStatusAltEnum;
  organizationType: OrganizationTypeEnum;
  regNumber: string;
}
