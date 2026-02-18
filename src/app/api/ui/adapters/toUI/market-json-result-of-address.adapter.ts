import { ApiMarketJsonResultOfAddressDto } from '../../../swagger/models/api-market-json-result-of-address-dto';
import { MarketJsonResultOfAddress } from '../../models/market-json-result-of-address.interface';

export function adaptMarketJsonResultOfAddressToUI(source?: ApiMarketJsonResultOfAddressDto | null): MarketJsonResultOfAddress {
  return (source ?? {}) as MarketJsonResultOfAddress;
}
