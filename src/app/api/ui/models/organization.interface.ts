import { AddressDto2 } from './address-dto-2.interface';
import { Manager } from './manager.interface';
import { Phone } from './phone.interface';

export interface Organization {
  address: string;
  addressInfo: AddressDto2;
  emails: string[];
  fullName: string;
  inn: string;
  kpp: string;
  managementName: string;
  managementPost: string;
  managers: Manager[];
  ogrn: string;
  phones: Phone[];
  regionKladrId: string;
  regionNameWithType: string;
  shortName: string;
  type: string;
}
