import { Address } from './address.interface';
import { BankInfo } from './bank-info.interface';
import { OrganizationCountryAltEnum } from '../enums/organization-country-alt.enum';
import { OrganizationTypeEnum } from '../enums/organization-type.enum';

export interface OrganizationInfo {
  address: Address;
  bankInfo: BankInfo;
  director: string;
  email: string;
  faxNumber: string;
  foreignParticipantId: string;
  fullName: string;
  guid: string;
  id: number;
  inn: string;
  isCustomer: boolean;
  isSmp: boolean;
  isSupplier: boolean;
  kpp: string;
  ogrn: string;
  organizationCountry: OrganizationCountryAltEnum;
  organizationType: OrganizationTypeEnum;
  phoneNumber: string;
  postAddress: Address;
  shortName: string;
}
