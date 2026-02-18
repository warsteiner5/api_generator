import { ApiPagedCollectionOfReportRegistryItemWithPeriodDto } from '../../../swagger/models/api-paged-collection-of-report-registry-item-with-period-dto';
import { PagedCollectionOfReportRegistryItemWithPeriod } from '../../models/paged-collection-of-report-registry-item-with-period.interface';
import { adaptReportRegistryItemWithPeriodToUI } from './report-registry-item-with-period.adapter';

export function adaptPagedCollectionOfReportRegistryItemWithPeriodToUI(source?: ApiPagedCollectionOfReportRegistryItemWithPeriodDto | null): PagedCollectionOfReportRegistryItemWithPeriod {
  return {
    page: (source?.Page ?? []).map((item) => adaptReportRegistryItemWithPeriodToUI(item)),
    total: source?.Total ?? 0,
  };
}
