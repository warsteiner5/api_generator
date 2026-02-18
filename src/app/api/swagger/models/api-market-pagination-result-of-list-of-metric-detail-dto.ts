/* tslint:disable */
/* eslint-disable */
import { ApiMetricDetailDto } from '../models/api-metric-detail-dto';
export interface ApiMarketPaginationResultOfListOfMetricDetailDto {
  currentPage?: number;
  items?: Array<ApiMetricDetailDto> | null;
  total?: number;
  totalPages?: number;
}
