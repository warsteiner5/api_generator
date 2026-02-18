import { ApiMarketJsonResultOfPagedCollectionOfReportRegistryItemDto } from '../../../swagger/models/api-market-json-result-of-paged-collection-of-report-registry-item-dto';
import { MarketJsonResultOfPagedCollectionOfReportRegistryItem } from '../../models/market-json-result-of-paged-collection-of-report-registry-item.interface';

export function adaptMarketJsonResultOfPagedCollectionOfReportRegistryItemToUI(source?: ApiMarketJsonResultOfPagedCollectionOfReportRegistryItemDto | null): MarketJsonResultOfPagedCollectionOfReportRegistryItem {
  return (source ?? {}) as MarketJsonResultOfPagedCollectionOfReportRegistryItem;
}
