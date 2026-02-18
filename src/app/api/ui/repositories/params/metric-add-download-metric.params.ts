import { MetricAddDownloadMetric$Params } from '../../../swagger/fn/metric/metric-add-download-metric';

export interface MetricAddDownloadMetricParams {
  tradeId: number;
}

export const metricAddDownloadMetricParamsAdapter = {
  adapt(params?: MetricAddDownloadMetricParams): MetricAddDownloadMetric$Params {
    if (!params) {
      return {} as MetricAddDownloadMetric$Params;
    }
    return {
      tradeId: params.tradeId,
    };
  }
};
