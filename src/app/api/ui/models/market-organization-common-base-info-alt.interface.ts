import { OrganizationTypeEnum } from '../enums/organization-type.enum';

export interface MarketOrganizationCommonBaseInfoAlt {
  country: string;
  directorFullName: string;
  email: string;
  fullName: string;
  inn: string;
  isSmp: boolean;
  kpp: string;
  ogrn: string;
  ogrnip: string;
  phoneNumber: string;
  shortName: string;
  type: OrganizationTypeEnum;
  unp: string;
}
