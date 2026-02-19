import { ApiMarketPaginationResultOfBidInfoOfAltDto } from '../../../swagger/models/api-market-pagination-result-of-bid-info-of';
import { MarketPaginationResultOfBidInfoOfAlt } from '../../models/market-pagination-result-of-bid-info-of-alt.interface';
import { adaptBidInfoAltToUI } from './bid-info-alt.adapter';

export function adaptMarketPaginationResultOfBidInfoOfAltToUI(source?: ApiMarketPaginationResultOfBidInfoOfAltDto | null): MarketPaginationResultOfBidInfoOfAlt {
  return {
    currentPage: source?.currentPage ?? 0,
    items: (source?.items ?? []).map((item) => adaptBidInfoAltToUI(item)),
    total: source?.total ?? 0,
    totalPages: source?.totalPages ?? 0,
  };
}
