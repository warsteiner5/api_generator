import { ApiMarketJsonResultOfMarketPaginationResultOfListOfFilterObject } from '../../../swagger/models/api-market-json-result-of-market-pagination-result-of-list-of-filter-object';
import { MarketJsonResultOfMarketPaginationResultOfListOfFilterObject } from '../../models/market-json-result-of-market-pagination-result-of-list-of-filter-object.interface';

export function adaptMarketJsonResultOfMarketPaginationResultOfListOfFilterObjectToUI(source?: ApiMarketJsonResultOfMarketPaginationResultOfListOfFilterObject | null): MarketJsonResultOfMarketPaginationResultOfListOfFilterObject {
  return (source ?? {}) as MarketJsonResultOfMarketPaginationResultOfListOfFilterObject;
}
