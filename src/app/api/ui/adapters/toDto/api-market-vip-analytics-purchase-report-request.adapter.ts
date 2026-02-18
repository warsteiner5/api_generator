import { MarketVipAnalyticsPurchaseReportRequestAlt } from '../../models/market-vip-analytics-purchase-report-request-alt.interface';
import { ApiMarketVipAnalyticsPurchaseReportRequestAltDto } from '../../../swagger/models/api-market-vip-analytics-purchase-report-request';
import { adaptApiReportFormatTypeEnum } from './api-report-format-type-enum.adapter';

export function adaptApiMarketVipAnalyticsPurchaseReportRequestAltDto(source?: MarketVipAnalyticsPurchaseReportRequestAlt | null): ApiMarketVipAnalyticsPurchaseReportRequestAltDto {
  return {
    Email: source?.email,
    FormatType: adaptApiReportFormatTypeEnum(source?.formatType),
    PublicationDateFrom: source?.publicationDateFrom,
    PublicationDateTo: source?.publicationDateTo,
    WorkGroupIds: source?.workGroupIds ?? [],
  };
}
