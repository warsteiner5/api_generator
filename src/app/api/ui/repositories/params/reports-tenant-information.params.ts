import { ReportsTenantInformation$Params } from '../../../swagger/fn/reports/reports-tenant-information';

// @ts-ignore
export interface ReportsTenantInformationParams {
}

export function reportsTenantInformationAdapter(params?: ReportsTenantInformationParams): ReportsTenantInformation$Params {
  if (!params) {
    return {} as ReportsTenantInformation$Params;
  }
  return {
  };
}
