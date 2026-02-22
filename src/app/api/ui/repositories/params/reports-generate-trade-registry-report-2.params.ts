import { ReportSearchFilterAlt } from '../../models/report-search-filter-alt.interface';
import { ReportsGenerateTradeRegistryReport2$Params } from '../../../swagger/fn/reports/reports-generate-trade-registry-report-2';
import { apiReportSearchFilterAltDtoAdapter } from '../../adapters/models/api-report-search-filter.adapter';

// @ts-ignore
export interface ReportsGenerateTradeRegistryReport2Params {
  body?: ReportSearchFilterAlt;
}

export function reportsGenerateTradeRegistryReport2Adapter(params?: ReportsGenerateTradeRegistryReport2Params): ReportsGenerateTradeRegistryReport2$Params {
  if (!params) {
    return {} as ReportsGenerateTradeRegistryReport2$Params;
  }
  return {
      body: apiReportSearchFilterAltDtoAdapter(params.body),
  };
}
