import { ApiReportSearchFilterAltDto } from '../../../swagger/models/api-report-search-filter';
import { ReportSearchFilterAlt } from '../../models/report-search-filter-alt.interface';
import { adaptSortParameterAltToUI } from './sort-parameter-alt.adapter';

export function adaptReportSearchFilterAltToUI(source?: ApiReportSearchFilterAltDto | null): ReportSearchFilterAlt {
  return {
    skip: source?.Skip ?? 0,
    sorting: (source?.Sorting ?? []).map((item) => adaptSortParameterAltToUI(item)),
    take: source?.Take ?? 0,
    userId: source?.UserId ?? 0,
  };
}
