import { ApiMetricValuesRequestAltDto } from '../../../swagger/models/api-metric-values-request';
import { MetricValuesRequestAlt } from '../../models/metric-values-request-alt.interface';
import { adaptMetricObjectTypeAltEnumToUI } from './metric-object-type-alt-enum.adapter';
import { adaptMetricTypeAltEnumToUI } from './metric-type-alt-enum.adapter';

export function adaptMetricValuesRequestAltToUI(source?: ApiMetricValuesRequestAltDto | null): MetricValuesRequestAlt {
  return {
    metricObjectType: adaptMetricObjectTypeAltEnumToUI(source?.MetricObjectType),
    metricType: adaptMetricTypeAltEnumToUI(source?.MetricType),
    objectIds: source?.ObjectIds ?? [],
  };
}
