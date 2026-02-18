import { StopListItem } from './stop-list-item.interface';

export interface MarketPaginationResultOfListOfStopListItem {
  currentPage: number;
  items: StopListItem[];
  total: number;
  totalPages: number;
}
