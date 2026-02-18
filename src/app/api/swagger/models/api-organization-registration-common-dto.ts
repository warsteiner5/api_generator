/* tslint:disable */
/* eslint-disable */
import { ApiOrganizationTypeEnum } from '../models/api-organization-type-enum';
export interface ApiOrganizationRegistrationCommonDto {
  ContactPerson?: string | null;
  Country?: string | null;
  DirectorFullName?: string | null;
  Email?: string | null;
  FullName?: string | null;
  Inn?: string | null;
  IsSmp?: boolean;
  Kpp?: string | null;
  Ogrn?: string | null;
  PhoneNumber?: string | null;
  ShortName?: string | null;
  Type?: ApiOrganizationTypeEnum;
  Unp?: string | null;
}
