import { ReportsTenantInformation$Params } from '../../../swagger/fn/reports/reports-tenant-information';

export interface ReportsTenantInformationParams {
}

export const reportsTenantInformationParamsAdapter = {
  adapt(params?: ReportsTenantInformationParams): ReportsTenantInformation$Params {
    if (!params) {
      return {} as ReportsTenantInformation$Params;
    }
    return {
    };
  }
};
