import { ApiMarketJsonResultOfOkServiceBriefReportDtoOf } from '../../../swagger/models/api-market-json-result-of-ok-service-brief-report-dto-of';
import { MarketJsonResultOfOkServiceBriefReportDtoOf } from '../../models/market-json-result-of-ok-service-brief-report-dto-of.interface';

export function adaptMarketJsonResultOfOkServiceBriefReportDtoOfToUI(source?: ApiMarketJsonResultOfOkServiceBriefReportDtoOf | null): MarketJsonResultOfOkServiceBriefReportDtoOf {
  return (source ?? {}) as MarketJsonResultOfOkServiceBriefReportDtoOf;
}
