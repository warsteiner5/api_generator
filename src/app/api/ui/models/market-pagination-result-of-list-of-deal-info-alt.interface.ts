import { DealInfoAlt } from './deal-info-alt.interface';

// @ts-ignore
export interface MarketPaginationResultOfListOfDealInfoAlt {
  currentPage: number;
  items: DealInfoAlt[];
  total: number;
  totalPages: number;
}
