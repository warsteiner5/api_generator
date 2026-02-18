import { PagedCollectionOfReportRegistryItemWithPeriod } from '../../models/paged-collection-of-report-registry-item-with-period.interface';
import { ApiPagedCollectionOfReportRegistryItemWithPeriodDto } from '../../../swagger/models/api-paged-collection-of-report-registry-item-with-period-dto';
import { adaptApiReportRegistryItemWithPeriodDto } from './api-report-registry-item-with-period-dto.adapter';

export function adaptApiPagedCollectionOfReportRegistryItemWithPeriodDto(source?: PagedCollectionOfReportRegistryItemWithPeriod | null): ApiPagedCollectionOfReportRegistryItemWithPeriodDto {
  return {
    Page: (source?.page ?? []).map((item) => adaptApiReportRegistryItemWithPeriodDto(item)),
    Total: source?.total,
  };
}
