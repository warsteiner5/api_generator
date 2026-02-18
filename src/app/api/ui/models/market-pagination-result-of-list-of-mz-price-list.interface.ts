import { MzPriceList } from './mz-price-list.interface';

export interface MarketPaginationResultOfListOfMzPriceList {
  currentPage: number;
  items: MzPriceList[];
  total: number;
  totalPages: number;
}
