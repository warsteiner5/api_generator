import { BidInfoAlt } from './bid-info-alt.interface';

export interface MarketPaginationResultOfBidInfoOf {
  currentPage: number;
  items: BidInfoAlt[];
  total: number;
  totalPages: number;
}
