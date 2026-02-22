import { OrganizationTypeEnum } from '../enums/organization-type.enum';

// @ts-ignore
export interface PartisipantInfoForDealOutSideEShopAlt {
  address: string;
  bankBik: string;
  bankCheckingAccount: string;
  bankCorrespondentAccount: string;
  bankName: string;
  bankPersonalAccount: string;
  email: string;
  firstName: string;
  fullName: string;
  inn: string;
  isSMP: boolean;
  kpp: string;
  lastName: string;
  middleName: string;
  ogrn: string;
  ogrnip: string;
  organizationType: OrganizationTypeEnum;
  phone: string;
  shortName: string;
  snils: string;
  warningMessage: string;
}
