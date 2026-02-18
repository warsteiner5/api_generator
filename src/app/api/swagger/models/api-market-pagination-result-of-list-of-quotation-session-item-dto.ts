/* tslint:disable */
/* eslint-disable */
import { ApiQuotationSessionItemDto } from '../models/api-quotation-session-item-dto';
export interface ApiMarketPaginationResultOfListOfQuotationSessionItemDto {
  currentPage?: number;
  items?: Array<ApiQuotationSessionItemDto> | null;
  total?: number;
  totalPages?: number;
}
