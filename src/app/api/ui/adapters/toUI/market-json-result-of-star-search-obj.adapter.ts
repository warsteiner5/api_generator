import { ApiMarketJsonResultOfStarSearchObj } from '../../../swagger/models/api-market-json-result-of-star-search-obj';
import { MarketJsonResultOfStarSearchObj } from '../../models/market-json-result-of-star-search-obj.interface';

export function adaptMarketJsonResultOfStarSearchObjToUI(source?: ApiMarketJsonResultOfStarSearchObj | null): MarketJsonResultOfStarSearchObj {
  return (source ?? {}) as MarketJsonResultOfStarSearchObj;
}
