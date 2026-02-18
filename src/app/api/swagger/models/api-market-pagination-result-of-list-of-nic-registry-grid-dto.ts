/* tslint:disable */
/* eslint-disable */
import { ApiNicRegistryGridDto } from '../models/api-nic-registry-grid-dto';
export interface ApiMarketPaginationResultOfListOfNicRegistryGridDto {
  currentPage?: number;
  items?: Array<ApiNicRegistryGridDto> | null;
  total?: number;
  totalPages?: number;
}
