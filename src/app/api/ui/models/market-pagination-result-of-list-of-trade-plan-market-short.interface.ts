import { TradePlanMarketShort } from './trade-plan-market-short.interface';

// @ts-ignore
export interface MarketPaginationResultOfListOfTradePlanMarketShort {
  currentPage: number;
  items: TradePlanMarketShort[];
  total: number;
  totalPages: number;
}
