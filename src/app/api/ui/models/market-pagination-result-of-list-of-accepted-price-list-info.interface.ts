import { AcceptedPriceListInfo } from './accepted-price-list-info.interface';

export interface MarketPaginationResultOfListOfAcceptedPriceListInfo {
  currentPage: number;
  items: AcceptedPriceListInfo[];
  total: number;
  totalPages: number;
}
