import { TradeRecommendation } from './trade-recommendation.interface';

export interface MarketPaginationResultOfListOfTradeRecommendation {
  currentPage: number;
  items: TradeRecommendation[];
  total: number;
  totalPages: number;
}
