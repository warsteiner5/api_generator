import { MarketPaginationResultOfListOfTradePlanMarketShort } from '../../models/market-pagination-result-of-list-of-trade-plan-market-short.interface';
import { ApiMarketPaginationResultOfListOfTradePlanMarketShortDto } from '../../../swagger/models/api-market-pagination-result-of-list-of-trade-plan-market-short-dto';
import { apiTradePlanMarketShortDtoAdapter } from './api-trade-plan-market-short-dto.adapter';

export const apiMarketPaginationResultOfListOfTradePlanMarketShortDtoAdapter = (source?: MarketPaginationResultOfListOfTradePlanMarketShort | null): ApiMarketPaginationResultOfListOfTradePlanMarketShortDto => {
  return {
    currentPage: source?.currentPage,
    items: source?.items?.map((item) => apiTradePlanMarketShortDtoAdapter(item)),
    total: source?.total,
    totalPages: source?.totalPages,
  };
}
