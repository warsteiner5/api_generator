/* tslint:disable */
/* eslint-disable */
import { ApiCategoryTenantReportResultDto } from '../models/api-category-tenant-report-result-dto';
import { ApiMarketJsonVoidResultAltDto } from '../models/api-market-json-void-result';
export type ApiMarketJsonResultOfListOfCategoryTenantReportResultDto = ApiMarketJsonVoidResultAltDto & {
'data'?: Array<ApiCategoryTenantReportResultDto> | null;
};
