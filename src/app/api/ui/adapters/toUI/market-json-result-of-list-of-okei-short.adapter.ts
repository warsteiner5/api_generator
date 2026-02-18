import { ApiMarketJsonResultOfListOfOkeiShortDto } from '../../../swagger/models/api-market-json-result-of-list-of-okei-short-dto';
import { MarketJsonResultOfListOfOkeiShort } from '../../models/market-json-result-of-list-of-okei-short.interface';

export function adaptMarketJsonResultOfListOfOkeiShortToUI(source?: ApiMarketJsonResultOfListOfOkeiShortDto | null): MarketJsonResultOfListOfOkeiShort {
  return (source ?? {}) as MarketJsonResultOfListOfOkeiShort;
}
