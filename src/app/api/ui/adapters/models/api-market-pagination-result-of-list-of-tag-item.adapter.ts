import { MarketPaginationResultOfListOfTagItemAlt } from '../../models/market-pagination-result-of-list-of-tag-item-alt.interface';
import { ApiMarketPaginationResultOfListOfTagItemAltDto } from '../../../swagger/models/api-market-pagination-result-of-list-of-tag-item';
import { apiTagItemAltDtoAdapter } from './api-tag-item.adapter';

export const apiMarketPaginationResultOfListOfTagItemAltDtoAdapter = (source?: MarketPaginationResultOfListOfTagItemAlt | null): ApiMarketPaginationResultOfListOfTagItemAltDto => {
  return {
    currentPage: source?.currentPage,
    items: source?.items?.map((item) => apiTagItemAltDtoAdapter(item)),
    total: source?.total,
    totalPages: source?.totalPages,
  };
}
