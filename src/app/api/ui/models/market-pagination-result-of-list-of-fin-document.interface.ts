import { FinDocument } from './fin-document.interface';

// @ts-ignore
export interface MarketPaginationResultOfListOfFinDocument {
  currentPage: number;
  items: FinDocument[];
  total: number;
  totalPages: number;
}
