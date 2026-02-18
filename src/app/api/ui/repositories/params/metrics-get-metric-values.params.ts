import { MetricsGetMetricValues$Params } from '../../../swagger/fn/metrics/metrics-get-metric-values';
import { MetricValuesRequestAlt } from '../../models/metric-values-request-alt.interface';
import { adaptApiMetricValuesRequestAltDto } from '../../adapters/toDto/api-metric-values-request.adapter';

export interface MetricsGetMetricValuesParams {
  body?: MetricValuesRequestAlt;
}

export const metricsGetMetricValuesParamsAdapter = {
  adapt(params?: MetricsGetMetricValuesParams): MetricsGetMetricValues$Params {
    if (!params) {
      return {} as MetricsGetMetricValues$Params;
    }
    return {
      body: adaptApiMetricValuesRequestAltDto(params.body),
    };
  }
};
