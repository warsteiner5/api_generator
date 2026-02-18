import { MarketPaginationResultOfListOfMzPriceList } from '../../models/market-pagination-result-of-list-of-mz-price-list.interface';
import { ApiMarketPaginationResultOfListOfMzPriceListDto } from '../../../swagger/models/api-market-pagination-result-of-list-of-mz-price-list-dto';
import { adaptApiMzPriceListDto } from './api-mz-price-list-dto.adapter';

export function adaptApiMarketPaginationResultOfListOfMzPriceListDto(source?: MarketPaginationResultOfListOfMzPriceList | null): ApiMarketPaginationResultOfListOfMzPriceListDto {
  return {
    currentPage: source?.currentPage,
    items: (source?.items ?? []).map((item) => adaptApiMzPriceListDto(item)),
    total: source?.total,
    totalPages: source?.totalPages,
  };
}
