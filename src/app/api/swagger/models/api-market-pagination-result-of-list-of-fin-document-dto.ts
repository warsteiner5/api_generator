/* tslint:disable */
/* eslint-disable */
import { ApiFinDocumentDto } from '../models/api-fin-document-dto';
export interface ApiMarketPaginationResultOfListOfFinDocumentDto {
  currentPage?: number;
  items?: Array<ApiFinDocumentDto> | null;
  total?: number;
  totalPages?: number;
}
