import { ReportSearchFilterAlt } from '../../models/report-search-filter-alt.interface';
import { ReportsGenerateCustomerRegistryReport2$Params } from '../../../swagger/fn/reports/reports-generate-customer-registry-report-2';
import { adaptApiReportSearchFilterAltDto } from '../../adapters/toDto/api-report-search-filter.adapter';

export interface ReportsGenerateCustomerRegistryReport2Params {
  body?: ReportSearchFilterAlt;
}

export const reportsGenerateCustomerRegistryReport2ParamsAdapter = {
  adapt(params?: ReportsGenerateCustomerRegistryReport2Params): ReportsGenerateCustomerRegistryReport2$Params {
    if (!params) {
      return {} as ReportsGenerateCustomerRegistryReport2$Params;
    }
    return {
      body: adaptApiReportSearchFilterAltDto(params.body),
    };
  }
};
