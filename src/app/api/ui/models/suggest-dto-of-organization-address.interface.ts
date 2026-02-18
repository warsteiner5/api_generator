import { OrganizationAddress } from './organization-address.interface';

export interface SuggestDtoOfOrganizationAddress {
  data: OrganizationAddress;
  unrestrictedValue: string;
  value: string;
}
