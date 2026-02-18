import { ApiMarketPaginationResultOfBidInfoOf } from '../../../swagger/models/api-market-pagination-result-of-bid-info-of';
import { MarketPaginationResultOfBidInfoOf } from '../../models/market-pagination-result-of-bid-info-of.interface';
import { adaptBidInfoAltToUI } from './bid-info-alt.adapter';

export function adaptMarketPaginationResultOfBidInfoOfToUI(source?: ApiMarketPaginationResultOfBidInfoOf | null): MarketPaginationResultOfBidInfoOf {
  return {
    currentPage: source?.currentPage ?? 0,
    items: (source?.items ?? []).map((item) => adaptBidInfoAltToUI(item)),
    total: source?.total ?? 0,
    totalPages: source?.totalPages ?? 0,
  };
}
