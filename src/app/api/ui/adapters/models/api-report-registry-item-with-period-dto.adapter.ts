import { ReportRegistryItemWithPeriod } from '../../models/report-registry-item-with-period.interface';
import { ApiReportRegistryItemWithPeriodDto } from '../../../swagger/models/api-report-registry-item-with-period-dto';

export const apiReportRegistryItemWithPeriodDtoAdapter = (source?: ReportRegistryItemWithPeriod | null): ApiReportRegistryItemWithPeriodDto => {
  return (source ?? {}) as ApiReportRegistryItemWithPeriodDto;
}
