import { ReportsCategoryTenant$Params } from '../../../swagger/fn/reports/reports-category-tenant';

export interface ReportsCategoryTenantParams {
}

export const reportsCategoryTenantParamsAdapter = {
  adapt(params?: ReportsCategoryTenantParams): ReportsCategoryTenant$Params {
    if (!params) {
      return {} as ReportsCategoryTenant$Params;
    }
    return {
    };
  }
};
