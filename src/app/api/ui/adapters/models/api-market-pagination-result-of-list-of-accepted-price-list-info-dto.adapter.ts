import { MarketPaginationResultOfListOfAcceptedPriceListInfo } from '../../models/market-pagination-result-of-list-of-accepted-price-list-info.interface';
import { ApiMarketPaginationResultOfListOfAcceptedPriceListInfoDto } from '../../../swagger/models/api-market-pagination-result-of-list-of-accepted-price-list-info-dto';
import { apiAcceptedPriceListInfoDtoAdapter } from './api-accepted-price-list-info-dto.adapter';

export const apiMarketPaginationResultOfListOfAcceptedPriceListInfoDtoAdapter = (source?: MarketPaginationResultOfListOfAcceptedPriceListInfo | null): ApiMarketPaginationResultOfListOfAcceptedPriceListInfoDto => {
  return {
    currentPage: source?.currentPage,
    items: source?.items?.map((item) => apiAcceptedPriceListInfoDtoAdapter(item)),
    total: source?.total,
    totalPages: source?.totalPages,
  };
}
