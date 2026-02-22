import { MetricsGetMetricValues$Params } from '../../../swagger/fn/metrics/metrics-get-metric-values';
import { MetricValuesRequestAlt } from '../../models/metric-values-request-alt.interface';
import { apiMetricValuesRequestAltDtoAdapter } from '../../adapters/models/api-metric-values-request.adapter';

// @ts-ignore
export interface MetricsGetMetricValuesParams {
  body?: MetricValuesRequestAlt;
}

export function metricsGetMetricValuesAdapter(params?: MetricsGetMetricValuesParams): MetricsGetMetricValues$Params {
  if (!params) {
    return {} as MetricsGetMetricValues$Params;
  }
  return {
      body: apiMetricValuesRequestAltDtoAdapter(params.body),
  };
}
