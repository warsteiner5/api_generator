import { MetricGetMetricDetails$Params } from '../../../swagger/fn/metric/metric-get-metric-details';

// @ts-ignore
export interface MetricGetMetricDetailsParams {
  objectId: number;
  metricTypeId: number;
  pageSize: number;
  page: number;
}

export function metricGetMetricDetailsAdapter(params?: MetricGetMetricDetailsParams): MetricGetMetricDetails$Params {
  if (!params) {
    return {} as MetricGetMetricDetails$Params;
  }
  return {
      objectId: params.objectId,
      metricTypeId: params.metricTypeId,
      pageSize: params.pageSize,
      page: params.page,
  };
}
