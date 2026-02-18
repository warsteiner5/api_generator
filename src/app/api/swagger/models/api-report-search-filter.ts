/* tslint:disable */
/* eslint-disable */
import { ApiSortParameterAltDto } from '../models/api-sort-parameter';
export interface ApiReportSearchFilterAltDto {
  Skip?: number | null;
  Sorting?: Array<ApiSortParameterAltDto> | null;
  Take?: number;
  UserId?: number;
}
