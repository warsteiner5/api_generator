import { MarketJsonResultOfPagedCollectionOfReportRegistryItemWithPeriod } from '../../models/market-json-result-of-paged-collection-of-report-registry-item-with-period.interface';
import { ApiMarketJsonResultOfPagedCollectionOfReportRegistryItemWithPeriodDto } from '../../../swagger/models/api-market-json-result-of-paged-collection-of-report-registry-item-with-period-dto';

export function adaptApiMarketJsonResultOfPagedCollectionOfReportRegistryItemWithPeriodDto(source?: MarketJsonResultOfPagedCollectionOfReportRegistryItemWithPeriod | null): ApiMarketJsonResultOfPagedCollectionOfReportRegistryItemWithPeriodDto {
  return (source ?? {}) as ApiMarketJsonResultOfPagedCollectionOfReportRegistryItemWithPeriodDto;
}
