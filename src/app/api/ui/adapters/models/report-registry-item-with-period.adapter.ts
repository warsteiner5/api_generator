import { ApiReportRegistryItemWithPeriodDto } from '../../../swagger/models/api-report-registry-item-with-period-dto';
import { ReportRegistryItemWithPeriod } from '../../models/report-registry-item-with-period.interface';
import { reportRegistryItemAdapter } from './report-registry-item.adapter';

export const reportRegistryItemWithPeriodAdapter = (source?: ApiReportRegistryItemWithPeriodDto | null): ReportRegistryItemWithPeriod => {
  return {
    ...reportRegistryItemAdapter(source as unknown as Parameters<typeof reportRegistryItemAdapter>[0]),
    startDate: source?.StartDate,
    endDate: source?.EndDate,
  };
}
