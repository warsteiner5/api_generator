import { MarketJsonResultOfListOfCategoryTenantReportResult } from '../../models/market-json-result-of-list-of-category-tenant-report-result.interface';
import { ApiMarketJsonResultOfListOfCategoryTenantReportResultDto } from '../../../swagger/models/api-market-json-result-of-list-of-category-tenant-report-result-dto';

export function adaptApiMarketJsonResultOfListOfCategoryTenantReportResultDto(source?: MarketJsonResultOfListOfCategoryTenantReportResult | null): ApiMarketJsonResultOfListOfCategoryTenantReportResultDto {
  return (source ?? {}) as ApiMarketJsonResultOfListOfCategoryTenantReportResultDto;
}
