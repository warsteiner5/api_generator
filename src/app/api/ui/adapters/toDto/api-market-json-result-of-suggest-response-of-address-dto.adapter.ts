import { MarketJsonResultOfSuggestResponseOfAddress } from '../../models/market-json-result-of-suggest-response-of-address.interface';
import { ApiMarketJsonResultOfSuggestResponseOfAddressDto } from '../../../swagger/models/api-market-json-result-of-suggest-response-of-address-dto';

export function adaptApiMarketJsonResultOfSuggestResponseOfAddressDto(source?: MarketJsonResultOfSuggestResponseOfAddress | null): ApiMarketJsonResultOfSuggestResponseOfAddressDto {
  return (source ?? {}) as ApiMarketJsonResultOfSuggestResponseOfAddressDto;
}
