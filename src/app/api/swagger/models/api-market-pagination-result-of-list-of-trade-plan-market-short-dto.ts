/* tslint:disable */
/* eslint-disable */
import { ApiTradePlanMarketShortDto } from '../models/api-trade-plan-market-short-dto';
export interface ApiMarketPaginationResultOfListOfTradePlanMarketShortDto {
  currentPage?: number;
  items?: Array<ApiTradePlanMarketShortDto> | null;
  total?: number;
  totalPages?: number;
}
