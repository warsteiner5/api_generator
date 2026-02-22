import { ApiPagedCollectionOfReportRegistryItemWithPeriodDto } from '../../../swagger/models/api-paged-collection-of-report-registry-item-with-period-dto';
import { PagedCollectionOfReportRegistryItemWithPeriod } from '../../models/paged-collection-of-report-registry-item-with-period.interface';
import { reportRegistryItemWithPeriodAdapter } from './report-registry-item-with-period.adapter';

export const pagedCollectionOfReportRegistryItemWithPeriodAdapter = (source?: ApiPagedCollectionOfReportRegistryItemWithPeriodDto | null): PagedCollectionOfReportRegistryItemWithPeriod => {
  return {
    page: source?.Page?.map((item) => reportRegistryItemWithPeriodAdapter(item)),
    total: source?.Total,
  };
}
