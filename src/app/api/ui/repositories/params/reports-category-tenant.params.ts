import { ReportsCategoryTenant$Params } from '../../../swagger/fn/reports/reports-category-tenant';

// @ts-ignore
export interface ReportsCategoryTenantParams {
}

export function reportsCategoryTenantAdapter(params?: ReportsCategoryTenantParams): ReportsCategoryTenant$Params {
  if (!params) {
    return {} as ReportsCategoryTenant$Params;
  }
  return {
  };
}
