import { ReportSearchFilterAlt } from '../../models/report-search-filter-alt.interface';
import { ApiReportSearchFilterAltDto } from '../../../swagger/models/api-report-search-filter';
import { apiSortParameterAltDtoAdapter } from './api-sort-parameter.adapter';

export const apiReportSearchFilterAltDtoAdapter = (source?: ReportSearchFilterAlt | null): ApiReportSearchFilterAltDto => {
  return {
    Skip: source?.skip,
    Sorting: source?.sorting?.map((item) => apiSortParameterAltDtoAdapter(item)),
    Take: source?.take,
    UserId: source?.userId,
  };
}
