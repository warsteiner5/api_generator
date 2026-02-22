import { ReportSearchFilterAlt } from '../../models/report-search-filter-alt.interface';
import { ReportsGet$Params } from '../../../swagger/fn/reports/reports-get';
import { apiReportSearchFilterAltDtoAdapter } from '../../adapters/models/api-report-search-filter.adapter';

// @ts-ignore
export interface ReportsGetParams {
  body?: ReportSearchFilterAlt;
}

export function reportsGetAdapter(params?: ReportsGetParams): ReportsGet$Params {
  if (!params) {
    return {} as ReportsGet$Params;
  }
  return {
      body: apiReportSearchFilterAltDtoAdapter(params.body),
  };
}
