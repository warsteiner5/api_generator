/* tslint:disable */
/* eslint-disable */
import { ApiMarketJsonVoidResultAltDto } from '../models/api-market-json-void-result';
import { ApiOkServiceBriefReportDto } from '../models/api-ok-service-brief-report-dto';
export type ApiMarketJsonResultOfOkServiceBriefReportDto = ApiMarketJsonVoidResultAltDto & {
'data'?: ApiOkServiceBriefReportDto | null;
};
