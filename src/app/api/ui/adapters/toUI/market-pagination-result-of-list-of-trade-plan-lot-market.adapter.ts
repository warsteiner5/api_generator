import { ApiMarketPaginationResultOfListOfTradePlanLotMarketDto } from '../../../swagger/models/api-market-pagination-result-of-list-of-trade-plan-lot-market-dto';
import { MarketPaginationResultOfListOfTradePlanLotMarket } from '../../models/market-pagination-result-of-list-of-trade-plan-lot-market.interface';
import { adaptTradePlanLotMarketToUI } from './trade-plan-lot-market.adapter';

export function adaptMarketPaginationResultOfListOfTradePlanLotMarketToUI(source?: ApiMarketPaginationResultOfListOfTradePlanLotMarketDto | null): MarketPaginationResultOfListOfTradePlanLotMarket {
  return {
    currentPage: source?.currentPage ?? 0,
    items: (source?.items ?? []).map((item) => adaptTradePlanLotMarketToUI(item)),
    total: source?.total ?? 0,
    totalPages: source?.totalPages ?? 0,
  };
}
