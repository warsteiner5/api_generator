import { DashboardGetAggregationInfoByDaysInMonth$Params } from '../../../swagger/fn/dashboard/dashboard-get-aggregation-info-by-days-in-month';

export interface DashboardGetAggregationInfoByDaysInMonthParams {
  guid: string;
  month: number;
  year: number;
}

export const dashboardGetAggregationInfoByDaysInMonthParamsAdapter = {
  adapt(params?: DashboardGetAggregationInfoByDaysInMonthParams): DashboardGetAggregationInfoByDaysInMonth$Params {
    if (!params) {
      return {} as DashboardGetAggregationInfoByDaysInMonth$Params;
    }
    return {
      guid: params.guid,
      month: params.month,
      year: params.year,
    };
  }
};
