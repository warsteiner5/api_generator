/* tslint:disable */
/* eslint-disable */
import { ApiAddressDto } from '../models/api-address-dto';
import { ApiBankInfoDto } from '../models/api-bank-info-dto';
import { ApiOrganizationCountryAltEnum } from '../models/api-organization-country';
import { ApiOrganizationTypeEnum } from '../models/api-organization-type-enum';
export interface ApiOrganizationInfoDto {
  Address?: ApiAddressDto | null;
  BankInfo?: ApiBankInfoDto | null;
  Director?: string | null;
  Email?: string | null;
  FaxNumber?: string | null;
  ForeignParticipantId?: string | null;
  FullName?: string | null;
  Guid?: string;
  Id?: number;
  Inn?: string | null;
  IsCustomer?: boolean;
  IsSmp?: boolean;
  IsSupplier?: boolean;
  Kpp?: string | null;
  Ogrn?: string | null;
  OrganizationCountry?: ApiOrganizationCountryAltEnum;
  OrganizationType?: ApiOrganizationTypeEnum;
  PhoneNumber?: string | null;
  PostAddress?: ApiAddressDto | null;
  ShortName?: string | null;
}
