/* tslint:disable */
/* eslint-disable */
import { ApiAddressDto } from '../models/api-address-dto';
export interface ApiOrganizationContactsDto {
  Address?: ApiAddressDto | null;
  AddressesSimilar?: boolean | null;
  ContactPerson?: string | null;
  DisplayContactInformationForOtherUsers?: boolean;
  PostAddress?: ApiAddressDto | null;
  WebSiteUrl?: string | null;
}
