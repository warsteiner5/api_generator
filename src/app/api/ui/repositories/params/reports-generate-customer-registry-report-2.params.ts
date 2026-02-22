import { ReportSearchFilterAlt } from '../../models/report-search-filter-alt.interface';
import { ReportsGenerateCustomerRegistryReport2$Params } from '../../../swagger/fn/reports/reports-generate-customer-registry-report-2';
import { apiReportSearchFilterAltDtoAdapter } from '../../adapters/models/api-report-search-filter.adapter';

// @ts-ignore
export interface ReportsGenerateCustomerRegistryReport2Params {
  body?: ReportSearchFilterAlt;
}

export function reportsGenerateCustomerRegistryReport2Adapter(params?: ReportsGenerateCustomerRegistryReport2Params): ReportsGenerateCustomerRegistryReport2$Params {
  if (!params) {
    return {} as ReportsGenerateCustomerRegistryReport2$Params;
  }
  return {
      body: apiReportSearchFilterAltDtoAdapter(params.body),
  };
}
