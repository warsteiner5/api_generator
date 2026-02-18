/* tslint:disable */
/* eslint-disable */
import { ApiSuggestDtoOfOrganizationAddressDto } from '../models/api-suggest-dto-of-organization-address-dto';
export interface ApiOrganizationSuggestDto {
  address?: ApiSuggestDtoOfOrganizationAddressDto | null;
  fullName?: string | null;
  inn?: string | null;
  kpp?: string | null;
  managementName?: string | null;
  managementPost?: string | null;
  ogrn?: string | null;
  regionKladrId?: string | null;
  regionNameWithType?: string | null;
  shortName?: string | null;
  type?: string | null;
}
