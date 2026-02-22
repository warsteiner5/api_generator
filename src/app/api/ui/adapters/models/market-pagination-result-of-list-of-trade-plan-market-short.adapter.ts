import { ApiMarketPaginationResultOfListOfTradePlanMarketShortDto } from '../../../swagger/models/api-market-pagination-result-of-list-of-trade-plan-market-short-dto';
import { MarketPaginationResultOfListOfTradePlanMarketShort } from '../../models/market-pagination-result-of-list-of-trade-plan-market-short.interface';
import { tradePlanMarketShortAdapter } from './trade-plan-market-short.adapter';

export const marketPaginationResultOfListOfTradePlanMarketShortAdapter = (source?: ApiMarketPaginationResultOfListOfTradePlanMarketShortDto | null): MarketPaginationResultOfListOfTradePlanMarketShort => {
  return {
    currentPage: source?.currentPage,
    items: source?.items?.map((item) => tradePlanMarketShortAdapter(item)),
    total: source?.total,
    totalPages: source?.totalPages,
  };
}
