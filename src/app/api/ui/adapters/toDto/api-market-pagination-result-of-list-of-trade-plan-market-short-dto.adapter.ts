import { MarketPaginationResultOfListOfTradePlanMarketShort } from '../../models/market-pagination-result-of-list-of-trade-plan-market-short.interface';
import { ApiMarketPaginationResultOfListOfTradePlanMarketShortDto } from '../../../swagger/models/api-market-pagination-result-of-list-of-trade-plan-market-short-dto';
import { adaptApiTradePlanMarketShortDto } from './api-trade-plan-market-short-dto.adapter';

export function adaptApiMarketPaginationResultOfListOfTradePlanMarketShortDto(source?: MarketPaginationResultOfListOfTradePlanMarketShort | null): ApiMarketPaginationResultOfListOfTradePlanMarketShortDto {
  return {
    currentPage: source?.currentPage,
    items: (source?.items ?? []).map((item) => adaptApiTradePlanMarketShortDto(item)),
    total: source?.total,
    totalPages: source?.totalPages,
  };
}
