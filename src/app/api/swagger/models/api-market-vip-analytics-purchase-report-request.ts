/* tslint:disable */
/* eslint-disable */
import { ApiReportFormatTypeEnum } from '../models/api-report-format-type-enum';
export interface ApiMarketVipAnalyticsPurchaseReportRequestAltDto {
  Email?: string | null;
  FormatType?: ApiReportFormatTypeEnum;
  PublicationDateFrom?: string;
  PublicationDateTo?: string;
  WorkGroupIds?: Array<number> | null;
}
