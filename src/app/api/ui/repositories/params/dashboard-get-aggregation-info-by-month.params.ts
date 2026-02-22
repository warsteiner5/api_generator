import { DashboardGetAggregationInfoByMonth$Params } from '../../../swagger/fn/dashboard/dashboard-get-aggregation-info-by-month';

// @ts-ignore
export interface DashboardGetAggregationInfoByMonthParams {
  guid: string;
  year: number;
  fromMonth: number;
  toMonth: number;
}

export function dashboardGetAggregationInfoByMonthAdapter(params?: DashboardGetAggregationInfoByMonthParams): DashboardGetAggregationInfoByMonth$Params {
  if (!params) {
    return {} as DashboardGetAggregationInfoByMonth$Params;
  }
  return {
      guid: params.guid,
      year: params.year,
      fromMonth: params.fromMonth,
      toMonth: params.toMonth,
  };
}
