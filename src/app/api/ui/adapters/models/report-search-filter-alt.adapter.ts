import { ApiReportSearchFilterAltDto } from '../../../swagger/models/api-report-search-filter';
import { ReportSearchFilterAlt } from '../../models/report-search-filter-alt.interface';
import { sortParameterAltAdapter } from './sort-parameter-alt.adapter';

export const reportSearchFilterAltAdapter = (source?: ApiReportSearchFilterAltDto | null): ReportSearchFilterAlt => {
  return {
    skip: source?.Skip,
    sorting: source?.Sorting?.map((item) => sortParameterAltAdapter(item)),
    take: source?.Take,
    userId: source?.UserId,
  };
}
