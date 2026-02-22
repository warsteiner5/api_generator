import { Address } from './address.interface';

// @ts-ignore
export interface MarketOrganizationCommonAddress {
  addressesSimilar: boolean;
  homeRegion: string;
  legalAddress: Address;
  postAddress: Address;
}
