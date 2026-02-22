import { PagedCollectionOfReportRegistryItem } from '../../models/paged-collection-of-report-registry-item.interface';
import { ApiPagedCollectionOfReportRegistryItemDto } from '../../../swagger/models/api-paged-collection-of-report-registry-item-dto';
import { apiReportRegistryItemDtoAdapter } from './api-report-registry-item-dto.adapter';

export const apiPagedCollectionOfReportRegistryItemDtoAdapter = (source?: PagedCollectionOfReportRegistryItem | null): ApiPagedCollectionOfReportRegistryItemDto => {
  return {
    Page: source?.page?.map((item) => apiReportRegistryItemDtoAdapter(item)),
    Total: source?.total,
  };
}
