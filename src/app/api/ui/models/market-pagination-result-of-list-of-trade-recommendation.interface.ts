import { TradeRecommendation } from './trade-recommendation.interface';

// @ts-ignore
export interface MarketPaginationResultOfListOfTradeRecommendation {
  currentPage: number;
  items: TradeRecommendation[];
  total: number;
  totalPages: number;
}
