import { ApiMarketJsonResultOfListOfTenantInformationReportResultDto } from '../../../swagger/models/api-market-json-result-of-list-of-tenant-information-report-result-dto';
import { MarketJsonResultOfListOfTenantInformationReportResult } from '../../models/market-json-result-of-list-of-tenant-information-report-result.interface';

export function adaptMarketJsonResultOfListOfTenantInformationReportResultToUI(source?: ApiMarketJsonResultOfListOfTenantInformationReportResultDto | null): MarketJsonResultOfListOfTenantInformationReportResult {
  return (source ?? {}) as MarketJsonResultOfListOfTenantInformationReportResult;
}
