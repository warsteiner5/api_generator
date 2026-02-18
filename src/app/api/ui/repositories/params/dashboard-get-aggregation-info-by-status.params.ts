import { DashboardGetAggregationInfoByStatus$Params } from '../../../swagger/fn/dashboard/dashboard-get-aggregation-info-by-status';

export interface DashboardGetAggregationInfoByStatusParams {
  guid: string;
}

export const dashboardGetAggregationInfoByStatusParamsAdapter = {
  adapt(params?: DashboardGetAggregationInfoByStatusParams): DashboardGetAggregationInfoByStatus$Params {
    if (!params) {
      return {} as DashboardGetAggregationInfoByStatus$Params;
    }
    return {
      guid: params.guid,
    };
  }
};
