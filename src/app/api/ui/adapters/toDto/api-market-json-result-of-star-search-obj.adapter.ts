import { MarketJsonResultOfStarSearchObj } from '../../models/market-json-result-of-star-search-obj.interface';
import { ApiMarketJsonResultOfStarSearchObj } from '../../../swagger/models/api-market-json-result-of-star-search-obj';

export function adaptApiMarketJsonResultOfStarSearchObj(source?: MarketJsonResultOfStarSearchObj | null): ApiMarketJsonResultOfStarSearchObj {
  return (source ?? {}) as ApiMarketJsonResultOfStarSearchObj;
}
