import { SuggestDtoOfAddress } from '../../models/suggest-dto-of-address.interface';
import { ApiSuggestDtoOfAddressDto } from '../../../swagger/models/api-suggest-dto-of-address-dto';
import { apiAddressDto2Adapter } from './api-address-dto-2.adapter';

export const apiSuggestDtoOfAddressDtoAdapter = (source?: SuggestDtoOfAddress | null): ApiSuggestDtoOfAddressDto => {
  return {
    data: source?.data === null ? undefined : apiAddressDto2Adapter(source?.data),
    unrestricted_value: source?.unrestrictedValue,
    value: source?.value,
  };
}
