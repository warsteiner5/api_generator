import { SuggestDtoOfAddress } from '../../models/suggest-dto-of-address.interface';
import { ApiSuggestDtoOfAddressDto } from '../../../swagger/models/api-suggest-dto-of-address-dto';
import { adaptApiAddressDto2 } from './api-address-dto-2.adapter';

export function adaptApiSuggestDtoOfAddressDto(source?: SuggestDtoOfAddress | null): ApiSuggestDtoOfAddressDto {
  return {
    data: adaptApiAddressDto2(source?.data),
    unrestricted_value: source?.unrestrictedValue,
    value: source?.value,
  };
}
