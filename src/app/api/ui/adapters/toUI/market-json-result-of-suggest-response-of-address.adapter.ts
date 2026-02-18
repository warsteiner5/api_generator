import { ApiMarketJsonResultOfSuggestResponseOfAddressDto } from '../../../swagger/models/api-market-json-result-of-suggest-response-of-address-dto';
import { MarketJsonResultOfSuggestResponseOfAddress } from '../../models/market-json-result-of-suggest-response-of-address.interface';

export function adaptMarketJsonResultOfSuggestResponseOfAddressToUI(source?: ApiMarketJsonResultOfSuggestResponseOfAddressDto | null): MarketJsonResultOfSuggestResponseOfAddress {
  return (source ?? {}) as MarketJsonResultOfSuggestResponseOfAddress;
}
