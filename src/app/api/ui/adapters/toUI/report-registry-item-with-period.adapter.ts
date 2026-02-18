import { ApiReportRegistryItemWithPeriodDto } from '../../../swagger/models/api-report-registry-item-with-period-dto';
import { ReportRegistryItemWithPeriod } from '../../models/report-registry-item-with-period.interface';

export function adaptReportRegistryItemWithPeriodToUI(source?: ApiReportRegistryItemWithPeriodDto | null): ReportRegistryItemWithPeriod {
  return (source ?? {}) as ReportRegistryItemWithPeriod;
}
