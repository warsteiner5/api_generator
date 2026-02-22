import { PagedCollectionOfReportRegistryItemWithPeriod } from '../../models/paged-collection-of-report-registry-item-with-period.interface';
import { ApiPagedCollectionOfReportRegistryItemWithPeriodDto } from '../../../swagger/models/api-paged-collection-of-report-registry-item-with-period-dto';
import { apiReportRegistryItemWithPeriodDtoAdapter } from './api-report-registry-item-with-period-dto.adapter';

export const apiPagedCollectionOfReportRegistryItemWithPeriodDtoAdapter = (source?: PagedCollectionOfReportRegistryItemWithPeriod | null): ApiPagedCollectionOfReportRegistryItemWithPeriodDto => {
  return {
    Page: source?.page?.map((item) => apiReportRegistryItemWithPeriodDtoAdapter(item)),
    Total: source?.total,
  };
}
