import { MarketPaginationResultOfBidInfoOf } from '../../models/market-pagination-result-of-bid-info-of.interface';
import { ApiMarketPaginationResultOfBidInfoOf } from '../../../swagger/models/api-market-pagination-result-of-bid-info-of';
import { adaptApiBidInfoAltDto } from './api-bid-info.adapter';

export function adaptApiMarketPaginationResultOfBidInfoOf(source?: MarketPaginationResultOfBidInfoOf | null): ApiMarketPaginationResultOfBidInfoOf {
  return {
    currentPage: source?.currentPage,
    items: (source?.items ?? []).map((item) => adaptApiBidInfoAltDto(item)),
    total: source?.total,
    totalPages: source?.totalPages,
  };
}
