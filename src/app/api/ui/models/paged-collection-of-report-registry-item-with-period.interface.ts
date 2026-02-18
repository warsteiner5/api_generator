import { ReportRegistryItemWithPeriod } from './report-registry-item-with-period.interface';

export interface PagedCollectionOfReportRegistryItemWithPeriod {
  page: ReportRegistryItemWithPeriod[];
  total: number;
}
