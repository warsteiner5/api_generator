/* tslint:disable */
/* eslint-disable */
import { ApiMarketJsonVoidResultAltDto } from '../models/api-market-json-void-result';
import { ApiTenantInformationReportResultDto } from '../models/api-tenant-information-report-result-dto';
export type ApiMarketJsonResultOfListOfTenantInformationReportResultDto = ApiMarketJsonVoidResultAltDto & {
'data'?: Array<ApiTenantInformationReportResultDto> | null;
};
