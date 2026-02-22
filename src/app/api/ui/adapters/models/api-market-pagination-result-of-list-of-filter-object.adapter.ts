import { MarketPaginationResultOfListOfFilterObjectAlt } from '../../models/market-pagination-result-of-list-of-filter-object-alt.interface';
import { ApiMarketPaginationResultOfListOfFilterObjectAltDto } from '../../../swagger/models/api-market-pagination-result-of-list-of-filter-object';
import { apiFilterObjectAltDtoAdapter } from './api-filter-object.adapter';

export const apiMarketPaginationResultOfListOfFilterObjectAltDtoAdapter = (source?: MarketPaginationResultOfListOfFilterObjectAlt | null): ApiMarketPaginationResultOfListOfFilterObjectAltDto => {
  return {
    currentPage: source?.currentPage,
    items: source?.items?.map((item) => apiFilterObjectAltDtoAdapter(item)),
    total: source?.total,
    totalPages: source?.totalPages,
  };
}
