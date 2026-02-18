import { ReportsGenerateSupplierRegistryReport$Params } from '../../../swagger/fn/reports/reports-generate-supplier-registry-report';

export interface ReportsGenerateSupplierRegistryReportParams {
}

export const reportsGenerateSupplierRegistryReportParamsAdapter = {
  adapt(params?: ReportsGenerateSupplierRegistryReportParams): ReportsGenerateSupplierRegistryReport$Params {
    if (!params) {
      return {} as ReportsGenerateSupplierRegistryReport$Params;
    }
    return {
    };
  }
};
