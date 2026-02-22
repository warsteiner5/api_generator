import { MarketPaginationResultOfListOfMzPriceList } from '../../models/market-pagination-result-of-list-of-mz-price-list.interface';
import { ApiMarketPaginationResultOfListOfMzPriceListDto } from '../../../swagger/models/api-market-pagination-result-of-list-of-mz-price-list-dto';
import { apiMzPriceListDtoAdapter } from './api-mz-price-list-dto.adapter';

export const apiMarketPaginationResultOfListOfMzPriceListDtoAdapter = (source?: MarketPaginationResultOfListOfMzPriceList | null): ApiMarketPaginationResultOfListOfMzPriceListDto => {
  return {
    currentPage: source?.currentPage,
    items: source?.items?.map((item) => apiMzPriceListDtoAdapter(item)),
    total: source?.total,
    totalPages: source?.totalPages,
  };
}
