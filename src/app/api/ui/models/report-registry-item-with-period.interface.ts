import { ReportRegistryItem } from './report-registry-item.interface';

export type ReportRegistryItemWithPeriod = ReportRegistryItem & { 'StartDate'?: string; 'EndDate'?: string; };
