import { ReportFormatTypeEnum } from '../enums/report-format-type.enum';

export interface MarketVipAnalyticsPurchaseReportRequestAlt {
  email: string;
  formatType: ReportFormatTypeEnum;
  publicationDateFrom: string;
  publicationDateTo: string;
  workGroupIds: number[];
}
