import { ApiMarketJsonResultOfOkServiceBriefReportDto } from '../../../swagger/models/api-market-json-result-of-ok-service-brief-report-dto';
import { MarketJsonResultOfOkServiceBriefReport } from '../../models/market-json-result-of-ok-service-brief-report.interface';

export function adaptMarketJsonResultOfOkServiceBriefReportToUI(source?: ApiMarketJsonResultOfOkServiceBriefReportDto | null): MarketJsonResultOfOkServiceBriefReport {
  return (source ?? {}) as MarketJsonResultOfOkServiceBriefReport;
}
