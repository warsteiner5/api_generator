import { TradePlanLotMarket } from './trade-plan-lot-market.interface';

export interface MarketPaginationResultOfListOfTradePlanLotMarket {
  currentPage: number;
  items: TradePlanLotMarket[];
  total: number;
  totalPages: number;
}
