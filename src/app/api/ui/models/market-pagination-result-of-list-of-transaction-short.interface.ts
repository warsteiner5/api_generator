import { TransactionShort } from './transaction-short.interface';

// @ts-ignore
export interface MarketPaginationResultOfListOfTransactionShort {
  currentPage: number;
  items: TransactionShort[];
  total: number;
  totalPages: number;
}
