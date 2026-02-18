import { ReportsGenerateCustomerRegistryReport$Params } from '../../../swagger/fn/reports/reports-generate-customer-registry-report';

export interface ReportsGenerateCustomerRegistryReportParams {
}

export const reportsGenerateCustomerRegistryReportParamsAdapter = {
  adapt(params?: ReportsGenerateCustomerRegistryReportParams): ReportsGenerateCustomerRegistryReport$Params {
    if (!params) {
      return {} as ReportsGenerateCustomerRegistryReport$Params;
    }
    return {
    };
  }
};
