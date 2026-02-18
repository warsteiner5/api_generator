import { MetricGetMetricValues$Params } from '../../../swagger/fn/metric/metric-get-metric-values';
import { MetricValuesRequestAlt } from '../../models/metric-values-request-alt.interface';
import { adaptApiMetricValuesRequestAltDto } from '../../adapters/toDto/api-metric-values-request.adapter';

export interface MetricGetMetricValuesParams {
  body?: MetricValuesRequestAlt;
}

export const metricGetMetricValuesParamsAdapter = {
  adapt(params?: MetricGetMetricValuesParams): MetricGetMetricValues$Params {
    if (!params) {
      return {} as MetricGetMetricValues$Params;
    }
    return {
      body: adaptApiMetricValuesRequestAltDto(params.body),
    };
  }
};
