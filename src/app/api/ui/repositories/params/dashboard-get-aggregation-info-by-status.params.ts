import { DashboardGetAggregationInfoByStatus$Params } from '../../../swagger/fn/dashboard/dashboard-get-aggregation-info-by-status';

// @ts-ignore
export interface DashboardGetAggregationInfoByStatusParams {
  guid: string;
}

export function dashboardGetAggregationInfoByStatusAdapter(params?: DashboardGetAggregationInfoByStatusParams): DashboardGetAggregationInfoByStatus$Params {
  if (!params) {
    return {} as DashboardGetAggregationInfoByStatus$Params;
  }
  return {
      guid: params.guid,
  };
}
