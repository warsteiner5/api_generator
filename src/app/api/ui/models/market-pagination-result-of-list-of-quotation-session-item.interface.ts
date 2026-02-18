import { QuotationSessionItem } from './quotation-session-item.interface';

export interface MarketPaginationResultOfListOfQuotationSessionItem {
  currentPage: number;
  items: QuotationSessionItem[];
  total: number;
  totalPages: number;
}
