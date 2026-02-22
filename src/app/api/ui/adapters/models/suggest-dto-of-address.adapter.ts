import { ApiSuggestDtoOfAddressDto } from '../../../swagger/models/api-suggest-dto-of-address-dto';
import { SuggestDtoOfAddress } from '../../models/suggest-dto-of-address.interface';
import { addressDto2Adapter } from './address-dto-2.adapter';

export const suggestDtoOfAddressAdapter = (source?: ApiSuggestDtoOfAddressDto | null): SuggestDtoOfAddress => {
  return {
    data: source?.data === null ? undefined : addressDto2Adapter(source?.data),
    unrestrictedValue: source?.unrestricted_value,
    value: source?.value,
  };
}
