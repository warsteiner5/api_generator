import { ReportSearchFilterAlt } from '../../models/report-search-filter-alt.interface';
import { ReportsGenerateSupplierRegistryReport2$Params } from '../../../swagger/fn/reports/reports-generate-supplier-registry-report-2';
import { apiReportSearchFilterAltDtoAdapter } from '../../adapters/models/api-report-search-filter.adapter';

// @ts-ignore
export interface ReportsGenerateSupplierRegistryReport2Params {
  body?: ReportSearchFilterAlt;
}

export function reportsGenerateSupplierRegistryReport2Adapter(params?: ReportsGenerateSupplierRegistryReport2Params): ReportsGenerateSupplierRegistryReport2$Params {
  if (!params) {
    return {} as ReportsGenerateSupplierRegistryReport2$Params;
  }
  return {
      body: apiReportSearchFilterAltDtoAdapter(params.body),
  };
}
