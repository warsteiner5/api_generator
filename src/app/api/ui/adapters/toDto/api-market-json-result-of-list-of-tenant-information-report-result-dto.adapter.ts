import { MarketJsonResultOfListOfTenantInformationReportResult } from '../../models/market-json-result-of-list-of-tenant-information-report-result.interface';
import { ApiMarketJsonResultOfListOfTenantInformationReportResultDto } from '../../../swagger/models/api-market-json-result-of-list-of-tenant-information-report-result-dto';

export function adaptApiMarketJsonResultOfListOfTenantInformationReportResultDto(source?: MarketJsonResultOfListOfTenantInformationReportResult | null): ApiMarketJsonResultOfListOfTenantInformationReportResultDto {
  return (source ?? {}) as ApiMarketJsonResultOfListOfTenantInformationReportResultDto;
}
