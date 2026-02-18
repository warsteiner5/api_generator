/* tslint:disable */
/* eslint-disable */
import { ApiFilterParameterDto } from '../models/api-filter-parameter-dto';
import { ApiFilterSourceTypeEnum } from '../models/api-filter-source-type-enum';
import { ApiMarketSearchActionEnum } from '../models/api-market-search-action-enum';
import { ApiSearchActionResultsDto } from '../models/api-search-action-results-dto';
export interface ApiSearchActionMessageDto {
  FilterParameters?: Array<ApiFilterParameterDto> | null;
  FilterSource?: ApiFilterSourceTypeEnum;
  KeyWords?: string | null;
  MarketSearchAction?: ApiMarketSearchActionEnum;
  OrganizationId?: number | null;
  SearchActionResults?: Array<ApiSearchActionResultsDto> | null;
  SearchDuration?: number;
  TenantId?: number;
  Url?: string | null;
  UserGuid?: string;
  UserId?: number | null;
}
