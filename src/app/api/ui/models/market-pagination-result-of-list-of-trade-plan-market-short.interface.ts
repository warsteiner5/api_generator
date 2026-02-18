import { TradePlanMarketShort } from './trade-plan-market-short.interface';

export interface MarketPaginationResultOfListOfTradePlanMarketShort {
  currentPage: number;
  items: TradePlanMarketShort[];
  total: number;
  totalPages: number;
}
