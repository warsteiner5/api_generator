import { MarketPaginationResultOfBidInfoOfAlt } from '../../models/market-pagination-result-of-bid-info-of-alt.interface';
import { ApiMarketPaginationResultOfBidInfoOfAltDto } from '../../../swagger/models/api-market-pagination-result-of-bid-info-of';
import { apiBidInfoAltDtoAdapter } from './api-bid-info.adapter';

export const apiMarketPaginationResultOfBidInfoOfAltDtoAdapter = (source?: MarketPaginationResultOfBidInfoOfAlt | null): ApiMarketPaginationResultOfBidInfoOfAltDto => {
  return {
    currentPage: source?.currentPage,
    items: source?.items?.map((item) => apiBidInfoAltDtoAdapter(item)),
    total: source?.total,
    totalPages: source?.totalPages,
  };
}
