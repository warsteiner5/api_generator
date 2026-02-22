import { MzPriceList } from './mz-price-list.interface';

// @ts-ignore
export interface MarketPaginationResultOfListOfMzPriceList {
  currentPage: number;
  items: MzPriceList[];
  total: number;
  totalPages: number;
}
