import { MarketJsonResultOfMarketPaginationResultOfListOfFilterObject } from '../../models/market-json-result-of-market-pagination-result-of-list-of-filter-object.interface';
import { ApiMarketJsonResultOfMarketPaginationResultOfListOfFilterObject } from '../../../swagger/models/api-market-json-result-of-market-pagination-result-of-list-of-filter-object';

export function adaptApiMarketJsonResultOfMarketPaginationResultOfListOfFilterObject(source?: MarketJsonResultOfMarketPaginationResultOfListOfFilterObject | null): ApiMarketJsonResultOfMarketPaginationResultOfListOfFilterObject {
  return (source ?? {}) as ApiMarketJsonResultOfMarketPaginationResultOfListOfFilterObject;
}
