/* tslint:disable */
/* eslint-disable */
import { ApiFilterAltDto } from '../models/api-filter';
import { ApiFilterRequestContainerModelAltDto } from '../models/api-filter-request-container-model';
export interface ApiStarRequestAltDto {
  And?: Array<ApiFilterRequestContainerModelAltDto> | null;
  Filter?: ApiFilterAltDto | null;
  IsAscendingSorting?: boolean;
  Or?: Array<ApiFilterRequestContainerModelAltDto> | null;
  SearchQuery?: string | null;
  Skip?: number;
  Sort?: string | null;
  Top?: number;
  Type?: string | null;
}
