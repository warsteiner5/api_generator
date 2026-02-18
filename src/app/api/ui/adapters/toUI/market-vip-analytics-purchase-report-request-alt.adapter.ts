import { ApiMarketVipAnalyticsPurchaseReportRequestAltDto } from '../../../swagger/models/api-market-vip-analytics-purchase-report-request';
import { MarketVipAnalyticsPurchaseReportRequestAlt } from '../../models/market-vip-analytics-purchase-report-request-alt.interface';
import { adaptReportFormatTypeEnumToUI } from './report-format-type-enum.adapter';

export function adaptMarketVipAnalyticsPurchaseReportRequestAltToUI(source?: ApiMarketVipAnalyticsPurchaseReportRequestAltDto | null): MarketVipAnalyticsPurchaseReportRequestAlt {
  return {
    email: source?.Email ?? '',
    formatType: adaptReportFormatTypeEnumToUI(source?.FormatType),
    publicationDateFrom: source?.PublicationDateFrom ?? '',
    publicationDateTo: source?.PublicationDateTo ?? '',
    workGroupIds: source?.WorkGroupIds ?? [],
  };
}
