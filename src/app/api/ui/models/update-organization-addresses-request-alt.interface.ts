import { Address } from './address.interface';

// @ts-ignore
export interface UpdateOrganizationAddressesRequestAlt {
  addressesSimilar: boolean;
  homeKladrRegionCode: string;
  legalAddress: Address;
  postAddress: Address;
}
