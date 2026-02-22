import { StopListItemExtended } from './stop-list-item-extended.interface';

// @ts-ignore
export interface MarketPaginationResultOfListOfStopListItemExtended {
  currentPage: number;
  items: StopListItemExtended[];
  total: number;
  totalPages: number;
}
