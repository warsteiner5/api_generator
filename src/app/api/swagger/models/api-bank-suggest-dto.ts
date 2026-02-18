/* tslint:disable */
/* eslint-disable */
import { ApiSuggestDtoOfAddressDto } from '../models/api-suggest-dto-of-address-dto';
export interface ApiBankSuggestDto {
  address?: ApiSuggestDtoOfAddressDto | null;
  bic?: string | null;
  bik?: string | null;
  correspondent_account?: string | null;
}
