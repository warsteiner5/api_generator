import { MarketJsonResultOfPagedCollectionOfReportRegistryItem } from '../../models/market-json-result-of-paged-collection-of-report-registry-item.interface';
import { ApiMarketJsonResultOfPagedCollectionOfReportRegistryItemDto } from '../../../swagger/models/api-market-json-result-of-paged-collection-of-report-registry-item-dto';

export function adaptApiMarketJsonResultOfPagedCollectionOfReportRegistryItemDto(source?: MarketJsonResultOfPagedCollectionOfReportRegistryItem | null): ApiMarketJsonResultOfPagedCollectionOfReportRegistryItemDto {
  return (source ?? {}) as ApiMarketJsonResultOfPagedCollectionOfReportRegistryItemDto;
}
