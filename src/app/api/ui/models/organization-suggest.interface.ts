import { SuggestDtoOfOrganizationAddress } from './suggest-dto-of-organization-address.interface';

export interface OrganizationSuggest {
  address: SuggestDtoOfOrganizationAddress;
  fullName: string;
  inn: string;
  kpp: string;
  managementName: string;
  managementPost: string;
  ogrn: string;
  regionKladrId: string;
  regionNameWithType: string;
  shortName: string;
  type: string;
}
