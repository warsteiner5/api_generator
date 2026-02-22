import { DashboardGetAggregationInfoByStatusForUser$Params } from '../../../swagger/fn/dashboard/dashboard-get-aggregation-info-by-status-for-user';

// @ts-ignore
export interface DashboardGetAggregationInfoByStatusForUserParams {
  guid: string;
}

export function dashboardGetAggregationInfoByStatusForUserAdapter(params?: DashboardGetAggregationInfoByStatusForUserParams): DashboardGetAggregationInfoByStatusForUser$Params {
  if (!params) {
    return {} as DashboardGetAggregationInfoByStatusForUser$Params;
  }
  return {
      guid: params.guid,
  };
}
