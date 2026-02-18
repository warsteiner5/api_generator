import { ApiMarketJsonResultOfCheckForAvailableGenerateReportResultDto } from '../../../swagger/models/api-market-json-result-of-check-for-available-generate-report-result-dto';
import { MarketJsonResultOfCheckForAvailableGenerateReportResult } from '../../models/market-json-result-of-check-for-available-generate-report-result.interface';

export function adaptMarketJsonResultOfCheckForAvailableGenerateReportResultToUI(source?: ApiMarketJsonResultOfCheckForAvailableGenerateReportResultDto | null): MarketJsonResultOfCheckForAvailableGenerateReportResult {
  return (source ?? {}) as MarketJsonResultOfCheckForAvailableGenerateReportResult;
}
