import { FinDocument } from './fin-document.interface';

export interface MarketPaginationResultOfListOfFinDocument {
  currentPage: number;
  items: FinDocument[];
  total: number;
  totalPages: number;
}
