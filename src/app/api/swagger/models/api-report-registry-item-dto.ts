/* tslint:disable */
/* eslint-disable */
import { ApiReportFormatTypeEnum } from '../models/api-report-format-type-enum';
import { ApiReportTypeEnum } from '../models/api-report-type-enum';
import { ApiSagaStatusEnum } from '../models/api-saga-status-enum';
export interface ApiReportRegistryItemDto {
  FormatType?: ApiReportFormatTypeEnum;
  Guid?: string;
  ReportDate?: string;
  ReportStatus?: ApiSagaStatusEnum;
  Size?: number | null;
  Type?: ApiReportTypeEnum;
}
