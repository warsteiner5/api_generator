import { ApiSuggestResponseOfAddressDto } from '../../../swagger/models/api-suggest-response-of-address-dto';
import { SuggestResponseOfAddress } from '../../models/suggest-response-of-address.interface';
import { suggestDtoOfAddressAdapter } from './suggest-dto-of-address.adapter';

export const suggestResponseOfAddressAdapter = (source?: ApiSuggestResponseOfAddressDto | null): SuggestResponseOfAddress => {
  return {
    suggestions: source?.suggestions?.map((item) => suggestDtoOfAddressAdapter(item)),
  };
}
