import { DealInfoAlt } from './deal-info-alt.interface';

export interface MarketPaginationResultOfListOfDealInfoAlt {
  currentPage: number;
  items: DealInfoAlt[];
  total: number;
  totalPages: number;
}
