import { ReportSearchFilterAlt } from '../../models/report-search-filter-alt.interface';
import { ApiReportSearchFilterAltDto } from '../../../swagger/models/api-report-search-filter';
import { adaptApiSortParameterAltDto } from './api-sort-parameter.adapter';

export function adaptApiReportSearchFilterAltDto(source?: ReportSearchFilterAlt | null): ApiReportSearchFilterAltDto {
  return {
    Skip: source?.skip,
    Sorting: (source?.sorting ?? []).map((item) => adaptApiSortParameterAltDto(item)),
    Take: source?.take,
    UserId: source?.userId,
  };
}
