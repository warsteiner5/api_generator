import { StopListItem } from './stop-list-item.interface';

// @ts-ignore
export interface MarketPaginationResultOfListOfStopListItem {
  currentPage: number;
  items: StopListItem[];
  total: number;
  totalPages: number;
}
