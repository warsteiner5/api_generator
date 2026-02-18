import { BankInfo } from './bank-info.interface';
import { OrganizationTypeEnum } from '../enums/organization-type.enum';

export interface ExternalDealSupplier {
  bankInfo: BankInfo;
  contactEmail: string;
  contactFirstName: string;
  contactLastName: string;
  contactMiddleName: string;
  contactPhoneNumber: string;
  fullAddress: string;
  id: number;
  inn: string;
  isSmp: boolean;
  kpp: string;
  name: string;
  ogrn: string;
  organizationType: OrganizationTypeEnum;
  shortName: string;
  warningMessage: string;
}
