import { MetricDetailsRequestAlt } from '../../models/metric-details-request-alt.interface';
import { MetricsGetDetailMetrics$Params } from '../../../swagger/fn/metrics/metrics-get-detail-metrics';
import { apiMetricDetailsRequestAltDtoAdapter } from '../../adapters/models/api-metric-details-request.adapter';

// @ts-ignore
export interface MetricsGetDetailMetricsParams {
  body?: MetricDetailsRequestAlt;
}

export function metricsGetDetailMetricsAdapter(params?: MetricsGetDetailMetricsParams): MetricsGetDetailMetrics$Params {
  if (!params) {
    return {} as MetricsGetDetailMetrics$Params;
  }
  return {
      body: apiMetricDetailsRequestAltDtoAdapter(params.body),
  };
}
