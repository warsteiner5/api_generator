/* tslint:disable */
/* eslint-disable */
import { ApiBankInfoDto } from '../models/api-bank-info-dto';
import { ApiOrganizationTypeEnum } from '../models/api-organization-type-enum';
export interface ApiExternalDealSupplierDto {
  BankInfo?: ApiBankInfoDto | null;
  ContactEmail?: string | null;
  ContactFirstName?: string | null;
  ContactLastName?: string | null;
  ContactMiddleName?: string | null;
  ContactPhoneNumber?: string | null;
  FullAddress?: string | null;
  Id?: number | null;
  Inn?: string | null;
  IsSmp?: boolean | null;
  Kpp?: string | null;
  Name?: string | null;
  Ogrn?: string | null;
  OrganizationType?: ApiOrganizationTypeEnum;
  ShortName?: string | null;
  WarningMessage?: string | null;
}
