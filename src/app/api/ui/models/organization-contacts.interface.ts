import { Address } from './address.interface';

// @ts-ignore
export interface OrganizationContacts {
  address: Address;
  addressesSimilar: boolean;
  contactPerson: string;
  displayContactInformationForOtherUsers: boolean;
  postAddress: Address;
  webSiteUrl: string;
}
