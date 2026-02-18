import { ApiMarketPaginationResultOfListOfFilterObjectAltDto } from '../../../swagger/models/api-market-pagination-result-of-list-of-filter-object';
import { MarketPaginationResultOfListOfFilterObjectAlt } from '../../models/market-pagination-result-of-list-of-filter-object-alt.interface';
import { adaptFilterObjectAltToUI } from './filter-object-alt.adapter';

export function adaptMarketPaginationResultOfListOfFilterObjectAltToUI(source?: ApiMarketPaginationResultOfListOfFilterObjectAltDto | null): MarketPaginationResultOfListOfFilterObjectAlt {
  return {
    currentPage: source?.currentPage ?? 0,
    items: (source?.items ?? []).map((item) => adaptFilterObjectAltToUI(item)),
    total: source?.total ?? 0,
    totalPages: source?.totalPages ?? 0,
  };
}
