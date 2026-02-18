/* tslint:disable */
/* eslint-disable */
import { ApiKsrValueAltDto } from '../models/api-ksr-value';
export interface ApiKsrCategoryAltDto {
  CategoryName?: string | null;
  Children?: Array<ApiKsrValueAltDto> | null;
  Order?: number;
}
