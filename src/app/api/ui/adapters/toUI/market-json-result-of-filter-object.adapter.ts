import { ApiMarketJsonResultOfFilterObject } from '../../../swagger/models/api-market-json-result-of-filter-object';
import { MarketJsonResultOfFilterObject } from '../../models/market-json-result-of-filter-object.interface';

export function adaptMarketJsonResultOfFilterObjectToUI(source?: ApiMarketJsonResultOfFilterObject | null): MarketJsonResultOfFilterObject {
  return (source ?? {}) as MarketJsonResultOfFilterObject;
}
