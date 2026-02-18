import { ApiPagedCollectionOfReportRegistryItemDto } from '../../../swagger/models/api-paged-collection-of-report-registry-item-dto';
import { PagedCollectionOfReportRegistryItem } from '../../models/paged-collection-of-report-registry-item.interface';
import { adaptReportRegistryItemToUI } from './report-registry-item.adapter';

export function adaptPagedCollectionOfReportRegistryItemToUI(source?: ApiPagedCollectionOfReportRegistryItemDto | null): PagedCollectionOfReportRegistryItem {
  return {
    page: (source?.Page ?? []).map((item) => adaptReportRegistryItemToUI(item)),
    total: source?.Total ?? 0,
  };
}
