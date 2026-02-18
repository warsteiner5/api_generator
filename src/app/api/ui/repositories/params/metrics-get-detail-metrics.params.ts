import { MetricDetailsRequestAlt } from '../../models/metric-details-request-alt.interface';
import { MetricsGetDetailMetrics$Params } from '../../../swagger/fn/metrics/metrics-get-detail-metrics';
import { adaptApiMetricDetailsRequestAltDto } from '../../adapters/toDto/api-metric-details-request.adapter';

export interface MetricsGetDetailMetricsParams {
  body?: MetricDetailsRequestAlt;
}

export const metricsGetDetailMetricsParamsAdapter = {
  adapt(params?: MetricsGetDetailMetricsParams): MetricsGetDetailMetrics$Params {
    if (!params) {
      return {} as MetricsGetDetailMetrics$Params;
    }
    return {
      body: adaptApiMetricDetailsRequestAltDto(params.body),
    };
  }
};
