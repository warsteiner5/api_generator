import { MarketDealAlt } from './market-deal-alt.interface';

export interface MarketPaginationResultOfListOfMarketDealAlt {
  currentPage: number;
  items: MarketDealAlt[];
  total: number;
  totalPages: number;
}
