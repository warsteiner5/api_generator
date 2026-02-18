import { ReportSearchFilterAlt } from '../../models/report-search-filter-alt.interface';
import { ReportsGet$Params } from '../../../swagger/fn/reports/reports-get';
import { adaptApiReportSearchFilterAltDto } from '../../adapters/toDto/api-report-search-filter.adapter';

export interface ReportsGetParams {
  body?: ReportSearchFilterAlt;
}

export const reportsGetParamsAdapter = {
  adapt(params?: ReportsGetParams): ReportsGet$Params {
    if (!params) {
      return {} as ReportsGet$Params;
    }
    return {
      body: adaptApiReportSearchFilterAltDto(params.body),
    };
  }
};
