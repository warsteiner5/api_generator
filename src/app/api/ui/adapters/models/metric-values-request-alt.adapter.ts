import { ApiMetricValuesRequestAltDto } from '../../../swagger/models/api-metric-values-request';
import { MetricValuesRequestAlt } from '../../models/metric-values-request-alt.interface';
import { metricObjectTypeAltEnumAdapter } from '../enums/metric-object-type-alt-enum.adapter';
import { metricTypeAltEnumAdapter } from '../enums/metric-type-alt-enum.adapter';

export const metricValuesRequestAltAdapter = (source?: ApiMetricValuesRequestAltDto | null): MetricValuesRequestAlt => {
  return {
    metricObjectType: source?.MetricObjectType === null ? undefined : metricObjectTypeAltEnumAdapter(source?.MetricObjectType),
    metricType: source?.MetricType === null ? undefined : metricTypeAltEnumAdapter(source?.MetricType),
    objectIds: source?.ObjectIds,
  };
}
