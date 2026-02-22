import { ApiMarketVipAnalyticsPurchaseReportRequestAltDto } from '../../../swagger/models/api-market-vip-analytics-purchase-report-request';
import { MarketVipAnalyticsPurchaseReportRequestAlt } from '../../models/market-vip-analytics-purchase-report-request-alt.interface';
import { reportFormatTypeEnumAdapter } from '../enums/report-format-type-enum.adapter';

export const marketVipAnalyticsPurchaseReportRequestAltAdapter = (source?: ApiMarketVipAnalyticsPurchaseReportRequestAltDto | null): MarketVipAnalyticsPurchaseReportRequestAlt => {
  return {
    email: source?.Email,
    formatType: source?.FormatType === null ? undefined : reportFormatTypeEnumAdapter(source?.FormatType),
    publicationDateFrom: source?.PublicationDateFrom,
    publicationDateTo: source?.PublicationDateTo,
    workGroupIds: source?.WorkGroupIds,
  };
}
