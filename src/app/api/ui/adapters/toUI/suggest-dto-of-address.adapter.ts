import { ApiSuggestDtoOfAddressDto } from '../../../swagger/models/api-suggest-dto-of-address-dto';
import { SuggestDtoOfAddress } from '../../models/suggest-dto-of-address.interface';
import { adaptAddressDto2ToUI } from './address-dto-2.adapter';

export function adaptSuggestDtoOfAddressToUI(source?: ApiSuggestDtoOfAddressDto | null): SuggestDtoOfAddress {
  return {
    data: adaptAddressDto2ToUI(source?.data),
    unrestrictedValue: source?.unrestricted_value ?? '',
    value: source?.value ?? '',
  };
}
