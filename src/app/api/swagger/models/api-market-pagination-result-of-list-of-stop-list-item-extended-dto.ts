/* tslint:disable */
/* eslint-disable */
import { ApiStopListItemExtendedDto } from '../models/api-stop-list-item-extended-dto';
export interface ApiMarketPaginationResultOfListOfStopListItemExtendedDto {
  currentPage?: number;
  items?: Array<ApiStopListItemExtendedDto> | null;
  total?: number;
  totalPages?: number;
}
