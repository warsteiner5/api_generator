/* tslint:disable */
/* eslint-disable */
import { ApiFilterAltDto } from '../models/api-filter';
export interface ApiFilterRequestContainerModelAltDto {
  And?: Array<ApiFilterRequestContainerModelAltDto> | null;
  Filter?: ApiFilterAltDto | null;
  Or?: Array<ApiFilterRequestContainerModelAltDto> | null;
}
