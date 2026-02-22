import { MarketVipAnalyticsPurchaseReportRequestAlt } from '../../models/market-vip-analytics-purchase-report-request-alt.interface';
import { ApiMarketVipAnalyticsPurchaseReportRequestAltDto } from '../../../swagger/models/api-market-vip-analytics-purchase-report-request';
import { apiReportFormatTypeEnumAdapter } from '../enums/api-report-format-type-enum.adapter';

export const apiMarketVipAnalyticsPurchaseReportRequestAltDtoAdapter = (source?: MarketVipAnalyticsPurchaseReportRequestAlt | null): ApiMarketVipAnalyticsPurchaseReportRequestAltDto => {
  return {
    Email: source?.email,
    FormatType: source?.formatType === null ? undefined : apiReportFormatTypeEnumAdapter(source?.formatType),
    PublicationDateFrom: source?.publicationDateFrom,
    PublicationDateTo: source?.publicationDateTo,
    WorkGroupIds: source?.workGroupIds,
  };
}
