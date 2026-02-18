import { MarketJsonResultOfOkServiceBriefReportDtoOf } from '../../models/market-json-result-of-ok-service-brief-report-dto-of.interface';
import { ApiMarketJsonResultOfOkServiceBriefReportDtoOf } from '../../../swagger/models/api-market-json-result-of-ok-service-brief-report-dto-of';

export function adaptApiMarketJsonResultOfOkServiceBriefReportDtoOf(source?: MarketJsonResultOfOkServiceBriefReportDtoOf | null): ApiMarketJsonResultOfOkServiceBriefReportDtoOf {
  return (source ?? {}) as ApiMarketJsonResultOfOkServiceBriefReportDtoOf;
}
