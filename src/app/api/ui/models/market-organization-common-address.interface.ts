import { Address } from './address.interface';

export interface MarketOrganizationCommonAddress {
  addressesSimilar: boolean;
  homeRegion: string;
  legalAddress: Address;
  postAddress: Address;
}
