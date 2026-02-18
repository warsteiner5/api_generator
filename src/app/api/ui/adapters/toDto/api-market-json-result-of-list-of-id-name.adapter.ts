import { MarketJsonResultOfListOfIdName } from '../../models/market-json-result-of-list-of-id-name.interface';
import { ApiMarketJsonResultOfListOfIdName } from '../../../swagger/models/api-market-json-result-of-list-of-id-name';

export function adaptApiMarketJsonResultOfListOfIdName(source?: MarketJsonResultOfListOfIdName | null): ApiMarketJsonResultOfListOfIdName {
  return (source ?? {}) as ApiMarketJsonResultOfListOfIdName;
}
