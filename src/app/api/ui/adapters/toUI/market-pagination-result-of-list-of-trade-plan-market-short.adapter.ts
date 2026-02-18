import { ApiMarketPaginationResultOfListOfTradePlanMarketShortDto } from '../../../swagger/models/api-market-pagination-result-of-list-of-trade-plan-market-short-dto';
import { MarketPaginationResultOfListOfTradePlanMarketShort } from '../../models/market-pagination-result-of-list-of-trade-plan-market-short.interface';
import { adaptTradePlanMarketShortToUI } from './trade-plan-market-short.adapter';

export function adaptMarketPaginationResultOfListOfTradePlanMarketShortToUI(source?: ApiMarketPaginationResultOfListOfTradePlanMarketShortDto | null): MarketPaginationResultOfListOfTradePlanMarketShort {
  return {
    currentPage: source?.currentPage ?? 0,
    items: (source?.items ?? []).map((item) => adaptTradePlanMarketShortToUI(item)),
    total: source?.total ?? 0,
    totalPages: source?.totalPages ?? 0,
  };
}
