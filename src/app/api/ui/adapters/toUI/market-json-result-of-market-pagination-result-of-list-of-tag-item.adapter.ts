import { ApiMarketJsonResultOfMarketPaginationResultOfListOfTagItem } from '../../../swagger/models/api-market-json-result-of-market-pagination-result-of-list-of-tag-item';
import { MarketJsonResultOfMarketPaginationResultOfListOfTagItem } from '../../models/market-json-result-of-market-pagination-result-of-list-of-tag-item.interface';

export function adaptMarketJsonResultOfMarketPaginationResultOfListOfTagItemToUI(source?: ApiMarketJsonResultOfMarketPaginationResultOfListOfTagItem | null): MarketJsonResultOfMarketPaginationResultOfListOfTagItem {
  return (source ?? {}) as MarketJsonResultOfMarketPaginationResultOfListOfTagItem;
}
