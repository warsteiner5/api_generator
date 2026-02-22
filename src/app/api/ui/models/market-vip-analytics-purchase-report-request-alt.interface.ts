import { ReportFormatTypeEnum } from '../enums/report-format-type.enum';

// @ts-ignore
export interface MarketVipAnalyticsPurchaseReportRequestAlt {
  email: string;
  formatType: ReportFormatTypeEnum;
  publicationDateFrom: string;
  publicationDateTo: string;
  workGroupIds: number[];
}
