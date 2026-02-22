import { MarketDealAlt } from './market-deal-alt.interface';

// @ts-ignore
export interface MarketPaginationResultOfListOfMarketDealAlt {
  currentPage: number;
  items: MarketDealAlt[];
  total: number;
  totalPages: number;
}
