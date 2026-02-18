import { ApiMarketPaginationResultOfListOfTagItemAltDto } from '../../../swagger/models/api-market-pagination-result-of-list-of-tag-item';
import { MarketPaginationResultOfListOfTagItemAlt } from '../../models/market-pagination-result-of-list-of-tag-item-alt.interface';
import { adaptTagItemAltToUI } from './tag-item-alt.adapter';

export function adaptMarketPaginationResultOfListOfTagItemAltToUI(source?: ApiMarketPaginationResultOfListOfTagItemAltDto | null): MarketPaginationResultOfListOfTagItemAlt {
  return {
    currentPage: source?.currentPage ?? 0,
    items: (source?.items ?? []).map((item) => adaptTagItemAltToUI(item)),
    total: source?.total ?? 0,
    totalPages: source?.totalPages ?? 0,
  };
}
