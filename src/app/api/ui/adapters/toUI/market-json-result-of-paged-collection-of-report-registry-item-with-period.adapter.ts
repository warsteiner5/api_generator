import { ApiMarketJsonResultOfPagedCollectionOfReportRegistryItemWithPeriodDto } from '../../../swagger/models/api-market-json-result-of-paged-collection-of-report-registry-item-with-period-dto';
import { MarketJsonResultOfPagedCollectionOfReportRegistryItemWithPeriod } from '../../models/market-json-result-of-paged-collection-of-report-registry-item-with-period.interface';

export function adaptMarketJsonResultOfPagedCollectionOfReportRegistryItemWithPeriodToUI(source?: ApiMarketJsonResultOfPagedCollectionOfReportRegistryItemWithPeriodDto | null): MarketJsonResultOfPagedCollectionOfReportRegistryItemWithPeriod {
  return (source ?? {}) as MarketJsonResultOfPagedCollectionOfReportRegistryItemWithPeriod;
}
