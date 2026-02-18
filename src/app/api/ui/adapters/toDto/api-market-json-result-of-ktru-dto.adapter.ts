import { MarketJsonResultOfKtru } from '../../models/market-json-result-of-ktru.interface';
import { ApiMarketJsonResultOfKtruDto } from '../../../swagger/models/api-market-json-result-of-ktru-dto';

export function adaptApiMarketJsonResultOfKtruDto(source?: MarketJsonResultOfKtru | null): ApiMarketJsonResultOfKtruDto {
  return (source ?? {}) as ApiMarketJsonResultOfKtruDto;
}
