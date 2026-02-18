import { ReportSearchFilterAlt } from '../../models/report-search-filter-alt.interface';
import { ReportsGenerateSupplierRegistryReport2$Params } from '../../../swagger/fn/reports/reports-generate-supplier-registry-report-2';
import { adaptApiReportSearchFilterAltDto } from '../../adapters/toDto/api-report-search-filter.adapter';

export interface ReportsGenerateSupplierRegistryReport2Params {
  body?: ReportSearchFilterAlt;
}

export const reportsGenerateSupplierRegistryReport2ParamsAdapter = {
  adapt(params?: ReportsGenerateSupplierRegistryReport2Params): ReportsGenerateSupplierRegistryReport2$Params {
    if (!params) {
      return {} as ReportsGenerateSupplierRegistryReport2$Params;
    }
    return {
      body: adaptApiReportSearchFilterAltDto(params.body),
    };
  }
};
