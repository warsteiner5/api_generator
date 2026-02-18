import { ApiMarketJsonResultOfMarketPaginationResultOfListOfMzPriceListDto } from '../../../swagger/models/api-market-json-result-of-market-pagination-result-of-list-of-mz-price-list-dto';
import { MarketJsonResultOfMarketPaginationResultOfListOfMzPriceList } from '../../models/market-json-result-of-market-pagination-result-of-list-of-mz-price-list.interface';

export function adaptMarketJsonResultOfMarketPaginationResultOfListOfMzPriceListToUI(source?: ApiMarketJsonResultOfMarketPaginationResultOfListOfMzPriceListDto | null): MarketJsonResultOfMarketPaginationResultOfListOfMzPriceList {
  return (source ?? {}) as MarketJsonResultOfMarketPaginationResultOfListOfMzPriceList;
}
