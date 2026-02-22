import { ApiMarketPaginationResultOfListOfTagItemAltDto } from '../../../swagger/models/api-market-pagination-result-of-list-of-tag-item';
import { MarketPaginationResultOfListOfTagItemAlt } from '../../models/market-pagination-result-of-list-of-tag-item-alt.interface';
import { tagItemAltAdapter } from './tag-item-alt.adapter';

export const marketPaginationResultOfListOfTagItemAltAdapter = (source?: ApiMarketPaginationResultOfListOfTagItemAltDto | null): MarketPaginationResultOfListOfTagItemAlt => {
  return {
    currentPage: source?.currentPage,
    items: source?.items?.map((item) => tagItemAltAdapter(item)),
    total: source?.total,
    totalPages: source?.totalPages,
  };
}
