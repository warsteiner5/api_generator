import { DealListItem } from './deal-list-item.interface';

// @ts-ignore
export interface MarketPaginationResultOfListOfDealListItem {
  currentPage: number;
  items: DealListItem[];
  total: number;
  totalPages: number;
}
