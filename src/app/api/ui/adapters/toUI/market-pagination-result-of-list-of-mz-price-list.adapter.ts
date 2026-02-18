import { ApiMarketPaginationResultOfListOfMzPriceListDto } from '../../../swagger/models/api-market-pagination-result-of-list-of-mz-price-list-dto';
import { MarketPaginationResultOfListOfMzPriceList } from '../../models/market-pagination-result-of-list-of-mz-price-list.interface';
import { adaptMzPriceListToUI } from './mz-price-list.adapter';

export function adaptMarketPaginationResultOfListOfMzPriceListToUI(source?: ApiMarketPaginationResultOfListOfMzPriceListDto | null): MarketPaginationResultOfListOfMzPriceList {
  return {
    currentPage: source?.currentPage ?? 0,
    items: (source?.items ?? []).map((item) => adaptMzPriceListToUI(item)),
    total: source?.total ?? 0,
    totalPages: source?.totalPages ?? 0,
  };
}
