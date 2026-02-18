import { MarketBusinessOperationLog } from './market-business-operation-log.interface';

export interface MarketPaginationResultOfListOfMarketBusinessOperationLog {
  currentPage: number;
  items: MarketBusinessOperationLog[];
  total: number;
  totalPages: number;
}
