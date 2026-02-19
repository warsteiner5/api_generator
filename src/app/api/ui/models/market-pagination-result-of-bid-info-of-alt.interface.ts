import { BidInfoAlt } from './bid-info-alt.interface';

export interface MarketPaginationResultOfBidInfoOfAlt {
  currentPage: number;
  items: BidInfoAlt[];
  total: number;
  totalPages: number;
}
