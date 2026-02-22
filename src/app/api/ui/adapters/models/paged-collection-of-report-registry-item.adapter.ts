import { ApiPagedCollectionOfReportRegistryItemDto } from '../../../swagger/models/api-paged-collection-of-report-registry-item-dto';
import { PagedCollectionOfReportRegistryItem } from '../../models/paged-collection-of-report-registry-item.interface';
import { reportRegistryItemAdapter } from './report-registry-item.adapter';

export const pagedCollectionOfReportRegistryItemAdapter = (source?: ApiPagedCollectionOfReportRegistryItemDto | null): PagedCollectionOfReportRegistryItem => {
  return {
    page: source?.Page?.map((item) => reportRegistryItemAdapter(item)),
    total: source?.Total,
  };
}
