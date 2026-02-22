import { MetricAddDownloadMetric$Params } from '../../../swagger/fn/metric/metric-add-download-metric';

// @ts-ignore
export interface MetricAddDownloadMetricParams {
  tradeId: number;
}

export function metricAddDownloadMetricAdapter(params?: MetricAddDownloadMetricParams): MetricAddDownloadMetric$Params {
  if (!params) {
    return {} as MetricAddDownloadMetric$Params;
  }
  return {
      tradeId: params.tradeId,
  };
}
