import { MarketJsonResultOfOkServiceBriefReport } from '../../models/market-json-result-of-ok-service-brief-report.interface';
import { ApiMarketJsonResultOfOkServiceBriefReportDto } from '../../../swagger/models/api-market-json-result-of-ok-service-brief-report-dto';

export function adaptApiMarketJsonResultOfOkServiceBriefReportDto(source?: MarketJsonResultOfOkServiceBriefReport | null): ApiMarketJsonResultOfOkServiceBriefReportDto {
  return (source ?? {}) as ApiMarketJsonResultOfOkServiceBriefReportDto;
}
