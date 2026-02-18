import { MarketJsonResultOfCheckForAvailableGenerateReportResult } from '../../models/market-json-result-of-check-for-available-generate-report-result.interface';
import { ApiMarketJsonResultOfCheckForAvailableGenerateReportResultDto } from '../../../swagger/models/api-market-json-result-of-check-for-available-generate-report-result-dto';

export function adaptApiMarketJsonResultOfCheckForAvailableGenerateReportResultDto(source?: MarketJsonResultOfCheckForAvailableGenerateReportResult | null): ApiMarketJsonResultOfCheckForAvailableGenerateReportResultDto {
  return (source ?? {}) as ApiMarketJsonResultOfCheckForAvailableGenerateReportResultDto;
}
