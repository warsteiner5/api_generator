import { ApiMarketJsonResultOfMarketPaginationResultOfListOfPriceListItem } from '../../../swagger/models/api-market-json-result-of-market-pagination-result-of-list-of-price-list-item';
import { MarketJsonResultOfMarketPaginationResultOfListOfPriceListItem } from '../../models/market-json-result-of-market-pagination-result-of-list-of-price-list-item.interface';

export function adaptMarketJsonResultOfMarketPaginationResultOfListOfPriceListItemToUI(source?: ApiMarketJsonResultOfMarketPaginationResultOfListOfPriceListItem | null): MarketJsonResultOfMarketPaginationResultOfListOfPriceListItem {
  return (source ?? {}) as MarketJsonResultOfMarketPaginationResultOfListOfPriceListItem;
}
