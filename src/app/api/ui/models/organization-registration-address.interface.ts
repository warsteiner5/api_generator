import { Address } from './address.interface';

export interface OrganizationRegistrationAddress {
  addressesSimilar: boolean;
  homeRegion: string;
  legalAddress: Address;
  postAddress: Address;
}
