/* tslint:disable */
/* eslint-disable */
import { ApiAddressDto } from '../models/api-address-dto';
export interface ApiMarketOrganizationCommonAddressDto {
  AddressesSimilar?: boolean;
  HomeRegion?: string | null;
  LegalAddress?: ApiAddressDto | null;
  PostAddress?: ApiAddressDto | null;
}
