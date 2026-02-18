import { DashboardGetAggregationInfoByStatusForUser$Params } from '../../../swagger/fn/dashboard/dashboard-get-aggregation-info-by-status-for-user';

export interface DashboardGetAggregationInfoByStatusForUserParams {
  guid: string;
}

export const dashboardGetAggregationInfoByStatusForUserParamsAdapter = {
  adapt(params?: DashboardGetAggregationInfoByStatusForUserParams): DashboardGetAggregationInfoByStatusForUser$Params {
    if (!params) {
      return {} as DashboardGetAggregationInfoByStatusForUser$Params;
    }
    return {
      guid: params.guid,
    };
  }
};
