import { ReportRegistryItemWithPeriod } from '../../models/report-registry-item-with-period.interface';
import { ApiReportRegistryItemWithPeriodDto } from '../../../swagger/models/api-report-registry-item-with-period-dto';
import { apiReportRegistryItemDtoAdapter } from './api-report-registry-item-dto.adapter';

export const apiReportRegistryItemWithPeriodDtoAdapter = (source?: ReportRegistryItemWithPeriod | null): ApiReportRegistryItemWithPeriodDto => {
  return {
    ...apiReportRegistryItemDtoAdapter(source as unknown as Parameters<typeof apiReportRegistryItemDtoAdapter>[0]),
    StartDate: source?.startDate,
    EndDate: source?.endDate,
  };
}
