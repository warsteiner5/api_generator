import { ApiMarketPaginationResultOfListOfAcceptedPriceListInfoDto } from '../../../swagger/models/api-market-pagination-result-of-list-of-accepted-price-list-info-dto';
import { MarketPaginationResultOfListOfAcceptedPriceListInfo } from '../../models/market-pagination-result-of-list-of-accepted-price-list-info.interface';
import { acceptedPriceListInfoAdapter } from './accepted-price-list-info.adapter';

export const marketPaginationResultOfListOfAcceptedPriceListInfoAdapter = (source?: ApiMarketPaginationResultOfListOfAcceptedPriceListInfoDto | null): MarketPaginationResultOfListOfAcceptedPriceListInfo => {
  return {
    currentPage: source?.currentPage,
    items: source?.items?.map((item) => acceptedPriceListInfoAdapter(item)),
    total: source?.total,
    totalPages: source?.totalPages,
  };
}
