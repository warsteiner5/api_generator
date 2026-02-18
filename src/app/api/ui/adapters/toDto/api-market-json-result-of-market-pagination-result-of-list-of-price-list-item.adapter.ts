import { MarketJsonResultOfMarketPaginationResultOfListOfPriceListItem } from '../../models/market-json-result-of-market-pagination-result-of-list-of-price-list-item.interface';
import { ApiMarketJsonResultOfMarketPaginationResultOfListOfPriceListItem } from '../../../swagger/models/api-market-json-result-of-market-pagination-result-of-list-of-price-list-item';

export function adaptApiMarketJsonResultOfMarketPaginationResultOfListOfPriceListItem(source?: MarketJsonResultOfMarketPaginationResultOfListOfPriceListItem | null): ApiMarketJsonResultOfMarketPaginationResultOfListOfPriceListItem {
  return (source ?? {}) as ApiMarketJsonResultOfMarketPaginationResultOfListOfPriceListItem;
}
