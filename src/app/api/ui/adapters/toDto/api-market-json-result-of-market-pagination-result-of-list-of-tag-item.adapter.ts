import { MarketJsonResultOfMarketPaginationResultOfListOfTagItem } from '../../models/market-json-result-of-market-pagination-result-of-list-of-tag-item.interface';
import { ApiMarketJsonResultOfMarketPaginationResultOfListOfTagItem } from '../../../swagger/models/api-market-json-result-of-market-pagination-result-of-list-of-tag-item';

export function adaptApiMarketJsonResultOfMarketPaginationResultOfListOfTagItem(source?: MarketJsonResultOfMarketPaginationResultOfListOfTagItem | null): ApiMarketJsonResultOfMarketPaginationResultOfListOfTagItem {
  return (source ?? {}) as ApiMarketJsonResultOfMarketPaginationResultOfListOfTagItem;
}
