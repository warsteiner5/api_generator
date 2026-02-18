import { MarketPaginationResultOfListOfAcceptedPriceListInfo } from '../../models/market-pagination-result-of-list-of-accepted-price-list-info.interface';
import { ApiMarketPaginationResultOfListOfAcceptedPriceListInfoDto } from '../../../swagger/models/api-market-pagination-result-of-list-of-accepted-price-list-info-dto';
import { adaptApiAcceptedPriceListInfoDto } from './api-accepted-price-list-info-dto.adapter';

export function adaptApiMarketPaginationResultOfListOfAcceptedPriceListInfoDto(source?: MarketPaginationResultOfListOfAcceptedPriceListInfo | null): ApiMarketPaginationResultOfListOfAcceptedPriceListInfoDto {
  return {
    currentPage: source?.currentPage,
    items: (source?.items ?? []).map((item) => adaptApiAcceptedPriceListInfoDto(item)),
    total: source?.total,
    totalPages: source?.totalPages,
  };
}
