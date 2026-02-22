import { QuotationSessionItem } from './quotation-session-item.interface';

// @ts-ignore
export interface MarketPaginationResultOfListOfQuotationSessionItem {
  currentPage: number;
  items: QuotationSessionItem[];
  total: number;
  totalPages: number;
}
