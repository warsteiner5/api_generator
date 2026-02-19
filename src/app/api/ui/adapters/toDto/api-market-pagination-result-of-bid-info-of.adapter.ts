import { MarketPaginationResultOfBidInfoOfAlt } from '../../models/market-pagination-result-of-bid-info-of-alt.interface';
import { ApiMarketPaginationResultOfBidInfoOfAltDto } from '../../../swagger/models/api-market-pagination-result-of-bid-info-of';
import { adaptApiBidInfoAltDto } from './api-bid-info.adapter';

export function adaptApiMarketPaginationResultOfBidInfoOfAltDto(source?: MarketPaginationResultOfBidInfoOfAlt | null): ApiMarketPaginationResultOfBidInfoOfAltDto {
  return {
    currentPage: source?.currentPage,
    items: (source?.items ?? []).map((item) => adaptApiBidInfoAltDto(item)),
    total: source?.total,
    totalPages: source?.totalPages,
  };
}
