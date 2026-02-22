import { OrganizationTypeEnum } from '../enums/organization-type.enum';

// @ts-ignore
export interface OrganizationRegistrationCommon {
  contactPerson: string;
  country: string;
  directorFullName: string;
  email: string;
  fullName: string;
  inn: string;
  isSmp: boolean;
  kpp: string;
  ogrn: string;
  phoneNumber: string;
  shortName: string;
  type: OrganizationTypeEnum;
  unp: string;
}
