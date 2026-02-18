import { Address } from './address.interface';

export interface UpdateOrganizationAddressesRequestAlt {
  addressesSimilar: boolean;
  homeKladrRegionCode: string;
  legalAddress: Address;
  postAddress: Address;
}
