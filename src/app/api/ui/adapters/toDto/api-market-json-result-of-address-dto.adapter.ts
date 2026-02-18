import { MarketJsonResultOfAddress } from '../../models/market-json-result-of-address.interface';
import { ApiMarketJsonResultOfAddressDto } from '../../../swagger/models/api-market-json-result-of-address-dto';

export function adaptApiMarketJsonResultOfAddressDto(source?: MarketJsonResultOfAddress | null): ApiMarketJsonResultOfAddressDto {
  return (source ?? {}) as ApiMarketJsonResultOfAddressDto;
}
