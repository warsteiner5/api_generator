import { ApiMarketJsonResultOfListOfCategoryTenantReportResultDto } from '../../../swagger/models/api-market-json-result-of-list-of-category-tenant-report-result-dto';
import { MarketJsonResultOfListOfCategoryTenantReportResult } from '../../models/market-json-result-of-list-of-category-tenant-report-result.interface';

export function adaptMarketJsonResultOfListOfCategoryTenantReportResultToUI(source?: ApiMarketJsonResultOfListOfCategoryTenantReportResultDto | null): MarketJsonResultOfListOfCategoryTenantReportResult {
  return (source ?? {}) as MarketJsonResultOfListOfCategoryTenantReportResult;
}
