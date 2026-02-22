import { ApiMarketPaginationResultOfBidInfoOfAltDto } from '../../../swagger/models/api-market-pagination-result-of-bid-info-of';
import { MarketPaginationResultOfBidInfoOfAlt } from '../../models/market-pagination-result-of-bid-info-of-alt.interface';
import { bidInfoAltAdapter } from './bid-info-alt.adapter';

export const marketPaginationResultOfBidInfoOfAltAdapter = (source?: ApiMarketPaginationResultOfBidInfoOfAltDto | null): MarketPaginationResultOfBidInfoOfAlt => {
  return {
    currentPage: source?.currentPage,
    items: source?.items?.map((item) => bidInfoAltAdapter(item)),
    total: source?.total,
    totalPages: source?.totalPages,
  };
}
