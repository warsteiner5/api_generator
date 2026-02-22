import { MetricGetMetricValues$Params } from '../../../swagger/fn/metric/metric-get-metric-values';
import { MetricValuesRequestAlt } from '../../models/metric-values-request-alt.interface';
import { apiMetricValuesRequestAltDtoAdapter } from '../../adapters/models/api-metric-values-request.adapter';

// @ts-ignore
export interface MetricGetMetricValuesParams {
  body?: MetricValuesRequestAlt;
}

export function metricGetMetricValuesAdapter(params?: MetricGetMetricValuesParams): MetricGetMetricValues$Params {
  if (!params) {
    return {} as MetricGetMetricValues$Params;
  }
  return {
      body: apiMetricValuesRequestAltDtoAdapter(params.body),
  };
}
