import { DashboardGetAggregationInfo$Params } from '../../../swagger/fn/dashboard/dashboard-get-aggregation-info';

export interface DashboardGetAggregationInfoParams {
}

export const dashboardGetAggregationInfoParamsAdapter = {
  adapt(params?: DashboardGetAggregationInfoParams): DashboardGetAggregationInfo$Params {
    if (!params) {
      return {} as DashboardGetAggregationInfo$Params;
    }
    return {
    };
  }
};
