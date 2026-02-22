import { ApiMarketPaginationResultOfListOfTradePlanLotMarketDto } from '../../../swagger/models/api-market-pagination-result-of-list-of-trade-plan-lot-market-dto';
import { MarketPaginationResultOfListOfTradePlanLotMarket } from '../../models/market-pagination-result-of-list-of-trade-plan-lot-market.interface';
import { tradePlanLotMarketAdapter } from './trade-plan-lot-market.adapter';

export const marketPaginationResultOfListOfTradePlanLotMarketAdapter = (source?: ApiMarketPaginationResultOfListOfTradePlanLotMarketDto | null): MarketPaginationResultOfListOfTradePlanLotMarket => {
  return {
    currentPage: source?.currentPage,
    items: source?.items?.map((item) => tradePlanLotMarketAdapter(item)),
    total: source?.total,
    totalPages: source?.totalPages,
  };
}
