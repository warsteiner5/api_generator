import { ReportRegistryItem } from './report-registry-item.interface';

export interface PagedCollectionOfReportRegistryItem {
  page: ReportRegistryItem[];
  total: number;
}
