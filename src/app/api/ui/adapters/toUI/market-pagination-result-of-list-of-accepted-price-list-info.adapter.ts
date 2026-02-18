import { ApiMarketPaginationResultOfListOfAcceptedPriceListInfoDto } from '../../../swagger/models/api-market-pagination-result-of-list-of-accepted-price-list-info-dto';
import { MarketPaginationResultOfListOfAcceptedPriceListInfo } from '../../models/market-pagination-result-of-list-of-accepted-price-list-info.interface';
import { adaptAcceptedPriceListInfoToUI } from './accepted-price-list-info.adapter';

export function adaptMarketPaginationResultOfListOfAcceptedPriceListInfoToUI(source?: ApiMarketPaginationResultOfListOfAcceptedPriceListInfoDto | null): MarketPaginationResultOfListOfAcceptedPriceListInfo {
  return {
    currentPage: source?.currentPage ?? 0,
    items: (source?.items ?? []).map((item) => adaptAcceptedPriceListInfoToUI(item)),
    total: source?.total ?? 0,
    totalPages: source?.totalPages ?? 0,
  };
}
