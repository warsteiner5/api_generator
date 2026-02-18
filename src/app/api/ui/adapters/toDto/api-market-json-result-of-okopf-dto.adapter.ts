import { MarketJsonResultOfOkopf } from '../../models/market-json-result-of-okopf.interface';
import { ApiMarketJsonResultOfOkopfDto } from '../../../swagger/models/api-market-json-result-of-okopf-dto';

export function adaptApiMarketJsonResultOfOkopfDto(source?: MarketJsonResultOfOkopf | null): ApiMarketJsonResultOfOkopfDto {
  return (source ?? {}) as ApiMarketJsonResultOfOkopfDto;
}
