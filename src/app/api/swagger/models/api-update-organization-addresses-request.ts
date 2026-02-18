/* tslint:disable */
/* eslint-disable */
import { ApiAddressDto } from '../models/api-address-dto';
export interface ApiUpdateOrganizationAddressesRequestAltDto {
  AddressesSimilar?: boolean;
  HomeKladrRegionCode?: string | null;
  LegalAddress?: ApiAddressDto | null;
  PostAddress?: ApiAddressDto | null;
}
