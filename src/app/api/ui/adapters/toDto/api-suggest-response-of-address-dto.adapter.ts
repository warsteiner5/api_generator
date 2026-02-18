import { SuggestResponseOfAddress } from '../../models/suggest-response-of-address.interface';
import { ApiSuggestResponseOfAddressDto } from '../../../swagger/models/api-suggest-response-of-address-dto';
import { adaptApiSuggestDtoOfAddressDto } from './api-suggest-dto-of-address-dto.adapter';

export function adaptApiSuggestResponseOfAddressDto(source?: SuggestResponseOfAddress | null): ApiSuggestResponseOfAddressDto {
  return {
    suggestions: (source?.suggestions ?? []).map((item) => adaptApiSuggestDtoOfAddressDto(item)),
  };
}
