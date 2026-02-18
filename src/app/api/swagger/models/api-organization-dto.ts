/* tslint:disable */
/* eslint-disable */
import { ApiAddressDto2 } from '../models/api-address-dto-2';
import { ApiManagerDto } from '../models/api-manager-dto';
import { ApiPhoneDto } from '../models/api-phone-dto';
export interface ApiOrganizationDto {
  address?: string | null;
  addressInfo?: ApiAddressDto2 | null;
  emails?: Array<string> | null;
  fullName?: string | null;
  inn?: string | null;
  kpp?: string | null;
  managementName?: string | null;
  managementPost?: string | null;
  managers?: Array<ApiManagerDto> | null;
  ogrn?: string | null;
  phones?: Array<ApiPhoneDto> | null;
  regionKladrId?: string | null;
  regionNameWithType?: string | null;
  shortName?: string | null;
  type?: string | null;
}
