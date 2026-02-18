import { ReportSearchFilterAlt } from '../../models/report-search-filter-alt.interface';
import { ReportsGenerateTradeRegistryReport2$Params } from '../../../swagger/fn/reports/reports-generate-trade-registry-report-2';
import { adaptApiReportSearchFilterAltDto } from '../../adapters/toDto/api-report-search-filter.adapter';

export interface ReportsGenerateTradeRegistryReport2Params {
  body?: ReportSearchFilterAlt;
}

export const reportsGenerateTradeRegistryReport2ParamsAdapter = {
  adapt(params?: ReportsGenerateTradeRegistryReport2Params): ReportsGenerateTradeRegistryReport2$Params {
    if (!params) {
      return {} as ReportsGenerateTradeRegistryReport2$Params;
    }
    return {
      body: adaptApiReportSearchFilterAltDto(params.body),
    };
  }
};
