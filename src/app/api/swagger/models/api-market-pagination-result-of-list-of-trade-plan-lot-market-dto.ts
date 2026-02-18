/* tslint:disable */
/* eslint-disable */
import { ApiTradePlanLotMarketDto } from '../models/api-trade-plan-lot-market-dto';
export interface ApiMarketPaginationResultOfListOfTradePlanLotMarketDto {
  currentPage?: number;
  items?: Array<ApiTradePlanLotMarketDto> | null;
  total?: number;
  totalPages?: number;
}
