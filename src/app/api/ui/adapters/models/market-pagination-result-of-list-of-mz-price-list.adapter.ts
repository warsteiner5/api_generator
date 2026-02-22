import { ApiMarketPaginationResultOfListOfMzPriceListDto } from '../../../swagger/models/api-market-pagination-result-of-list-of-mz-price-list-dto';
import { MarketPaginationResultOfListOfMzPriceList } from '../../models/market-pagination-result-of-list-of-mz-price-list.interface';
import { mzPriceListAdapter } from './mz-price-list.adapter';

export const marketPaginationResultOfListOfMzPriceListAdapter = (source?: ApiMarketPaginationResultOfListOfMzPriceListDto | null): MarketPaginationResultOfListOfMzPriceList => {
  return {
    currentPage: source?.currentPage,
    items: source?.items?.map((item) => mzPriceListAdapter(item)),
    total: source?.total,
    totalPages: source?.totalPages,
  };
}
