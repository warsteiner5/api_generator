import { ReportRegistryItem } from './report-registry-item.interface';

// @ts-ignore
export interface ReportRegistryItemWithPeriod extends ReportRegistryItem {
  startDate: string;
  endDate: string;
}
