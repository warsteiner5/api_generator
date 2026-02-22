import { Address } from './address.interface';

// @ts-ignore
export interface OrganizationRegistrationAddress {
  addressesSimilar: boolean;
  homeRegion: string;
  legalAddress: Address;
  postAddress: Address;
}
