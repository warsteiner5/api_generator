import { DealListItem } from './deal-list-item.interface';

export interface MarketPaginationResultOfListOfDealListItem {
  currentPage: number;
  items: DealListItem[];
  total: number;
  totalPages: number;
}
