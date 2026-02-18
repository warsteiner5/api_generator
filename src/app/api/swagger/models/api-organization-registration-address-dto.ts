/* tslint:disable */
/* eslint-disable */
import { ApiAddressDto } from '../models/api-address-dto';
export interface ApiOrganizationRegistrationAddressDto {
  AddressesSimilar?: boolean;
  HomeRegion?: string | null;
  LegalAddress?: ApiAddressDto | null;
  PostAddress?: ApiAddressDto | null;
}
