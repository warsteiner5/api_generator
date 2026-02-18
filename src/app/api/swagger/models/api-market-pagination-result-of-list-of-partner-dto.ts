/* tslint:disable */
/* eslint-disable */
import { ApiPartnerDto } from '../models/api-partner-dto';
export interface ApiMarketPaginationResultOfListOfPartnerDto {
  currentPage?: number;
  items?: Array<ApiPartnerDto> | null;
  total?: number;
  totalPages?: number;
}
