import { TransactionShort } from './transaction-short.interface';

export interface MarketPaginationResultOfListOfTransactionShort {
  currentPage: number;
  items: TransactionShort[];
  total: number;
  totalPages: number;
}
