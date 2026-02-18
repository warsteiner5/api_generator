import { ApiMetricDetailsRequestAltDto } from '../../../swagger/models/api-metric-details-request';
import { MetricDetailsRequestAlt } from '../../models/metric-details-request-alt.interface';
import { adaptMetricTypeAltEnumToUI } from './metric-type-alt-enum.adapter';

export function adaptMetricDetailsRequestAltToUI(source?: ApiMetricDetailsRequestAltDto | null): MetricDetailsRequestAlt {
  return {
    metricType: adaptMetricTypeAltEnumToUI(source?.MetricType),
    objectId: source?.ObjectId ?? 0,
    page: source?.Page ?? 0,
    pageSize: source?.PageSize ?? 0,
  };
}
