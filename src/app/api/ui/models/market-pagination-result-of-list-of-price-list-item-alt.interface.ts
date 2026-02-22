import { PriceListItemAlt } from './price-list-item-alt.interface';

// @ts-ignore
export interface MarketPaginationResultOfListOfPriceListItemAlt {
  currentPage: number;
  items: PriceListItemAlt[];
  total: number;
  totalPages: number;
}
