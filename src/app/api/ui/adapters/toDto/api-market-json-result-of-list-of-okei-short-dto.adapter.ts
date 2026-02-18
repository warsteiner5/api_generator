import { MarketJsonResultOfListOfOkeiShort } from '../../models/market-json-result-of-list-of-okei-short.interface';
import { ApiMarketJsonResultOfListOfOkeiShortDto } from '../../../swagger/models/api-market-json-result-of-list-of-okei-short-dto';

export function adaptApiMarketJsonResultOfListOfOkeiShortDto(source?: MarketJsonResultOfListOfOkeiShort | null): ApiMarketJsonResultOfListOfOkeiShortDto {
  return (source ?? {}) as ApiMarketJsonResultOfListOfOkeiShortDto;
}
