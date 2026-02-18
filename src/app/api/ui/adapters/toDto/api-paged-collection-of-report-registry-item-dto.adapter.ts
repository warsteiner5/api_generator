import { PagedCollectionOfReportRegistryItem } from '../../models/paged-collection-of-report-registry-item.interface';
import { ApiPagedCollectionOfReportRegistryItemDto } from '../../../swagger/models/api-paged-collection-of-report-registry-item-dto';
import { adaptApiReportRegistryItemDto } from './api-report-registry-item-dto.adapter';

export function adaptApiPagedCollectionOfReportRegistryItemDto(source?: PagedCollectionOfReportRegistryItem | null): ApiPagedCollectionOfReportRegistryItemDto {
  return {
    Page: (source?.page ?? []).map((item) => adaptApiReportRegistryItemDto(item)),
    Total: source?.total,
  };
}
