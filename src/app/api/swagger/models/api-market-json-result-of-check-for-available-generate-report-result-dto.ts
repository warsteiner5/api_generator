/* tslint:disable */
/* eslint-disable */
import { ApiCheckForAvailableGenerateReportResultDto } from '../models/api-check-for-available-generate-report-result-dto';
import { ApiMarketJsonVoidResultAltDto } from '../models/api-market-json-void-result';
export type ApiMarketJsonResultOfCheckForAvailableGenerateReportResultDto = ApiMarketJsonVoidResultAltDto & {
'data'?: ApiCheckForAvailableGenerateReportResultDto | null;
};
