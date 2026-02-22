import { SuggestResponseOfAddress } from '../../models/suggest-response-of-address.interface';
import { ApiSuggestResponseOfAddressDto } from '../../../swagger/models/api-suggest-response-of-address-dto';
import { apiSuggestDtoOfAddressDtoAdapter } from './api-suggest-dto-of-address-dto.adapter';

export const apiSuggestResponseOfAddressDtoAdapter = (source?: SuggestResponseOfAddress | null): ApiSuggestResponseOfAddressDto => {
  return {
    suggestions: source?.suggestions?.map((item) => apiSuggestDtoOfAddressDtoAdapter(item)),
  };
}
