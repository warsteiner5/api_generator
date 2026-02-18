import { MarketJsonResultOfFilterObject } from '../../models/market-json-result-of-filter-object.interface';
import { ApiMarketJsonResultOfFilterObject } from '../../../swagger/models/api-market-json-result-of-filter-object';

export function adaptApiMarketJsonResultOfFilterObject(source?: MarketJsonResultOfFilterObject | null): ApiMarketJsonResultOfFilterObject {
  return (source ?? {}) as ApiMarketJsonResultOfFilterObject;
}
