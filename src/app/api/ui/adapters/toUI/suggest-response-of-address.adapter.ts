import { ApiSuggestResponseOfAddressDto } from '../../../swagger/models/api-suggest-response-of-address-dto';
import { SuggestResponseOfAddress } from '../../models/suggest-response-of-address.interface';
import { adaptSuggestDtoOfAddressToUI } from './suggest-dto-of-address.adapter';

export function adaptSuggestResponseOfAddressToUI(source?: ApiSuggestResponseOfAddressDto | null): SuggestResponseOfAddress {
  return {
    suggestions: (source?.suggestions ?? []).map((item) => adaptSuggestDtoOfAddressToUI(item)),
  };
}
