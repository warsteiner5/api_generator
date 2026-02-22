import { ApiMarketPaginationResultOfListOfFilterObjectAltDto } from '../../../swagger/models/api-market-pagination-result-of-list-of-filter-object';
import { MarketPaginationResultOfListOfFilterObjectAlt } from '../../models/market-pagination-result-of-list-of-filter-object-alt.interface';
import { filterObjectAltAdapter } from './filter-object-alt.adapter';

export const marketPaginationResultOfListOfFilterObjectAltAdapter = (source?: ApiMarketPaginationResultOfListOfFilterObjectAltDto | null): MarketPaginationResultOfListOfFilterObjectAlt => {
  return {
    currentPage: source?.currentPage,
    items: source?.items?.map((item) => filterObjectAltAdapter(item)),
    total: source?.total,
    totalPages: source?.totalPages,
  };
}
